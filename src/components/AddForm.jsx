import React from "react";
// import ReactDOM from "react-dom";
import { Field, Form, Formik, ErrorMessage } from "formik";
// import { users } from "../utils/tableData";
// import TestTable from "./TestTabale";

const validateName = (value) => {
  let error;
  if (!value) {
    error = "Name is required";
  } else if (value.length < 2) {
    error = "Name must be at least 2 characters long";
  } else if (value.length > 50) {
    error = "Name cannot exceed 50 characters";
  }
  return error;
};

const AddForm = (props) => {
  const { isEdit, setEdit, isValue, setValue, name, isInput } = props;
  console.log("isEdit", isEdit, name);

  // useEffect(() => {}, []);

  return (
    <div>
      <Formik
        initialValues={{
          name: isEdit ? isInput?.name : "",
        }}
        enableReinitialize={true}
        onSubmit={async (values, { resetForm }) => {
          function generateUniqueId() {
            const timestamp = Date.now().toString(16); // Convert current timestamp to hexadecimal string
            const random = Math.random().toString(16).slice(2); // Generate random hexadecimal string
            const uniqueId = timestamp + random; // Concatenate timestamp and random string
            return uniqueId;
          }

          const id = generateUniqueId();
          // setValue({ id, name: values?.name });
          if (isEdit) {
            setValue((prev) => {
              return prev?.map((data) => {
                if (data?.id === isInput?.id) {
                  return {
                    ...data,
                    name: values?.name,
                  };
                } else {
                  return data;
                }
              });
            });
            setEdit(false);
            resetForm();
          } else {
            setValue([...isValue, { id, name: values?.name }]);
            resetForm();
          }
        }}
      >
        <Form>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <label htmlFor="name">Name : </label>
              <Field
                id="name"
                name="name"
                placeholder="Enter Name"
                // value={values?.name}
                // value={props?.values?.name}
                validate={validateName}
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button className="buttonClass" type="submit">
                Submit
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default AddForm;
