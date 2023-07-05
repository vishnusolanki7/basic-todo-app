import React , { useState } from 'react'
import AddForm from "../components/AddForm";
import TestTable from '../components/TestTabale';
import { users } from "../utils/tableData";

const Home = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isValue, setValue] = useState(users);
  const [isEdit, setEdit] = useState(false);
  const [isInput, setInput] = useState(null);
  // console.log("isEdit1", isEdit);
  return (
    <div className="home-wrapper">
      <div className="title">Add Form</div>
      <br />
      <div className="addForm">
        <AddForm
          isInput={isInput}
          setInput={setInput}
          isEdit={isEdit}
          setEdit={setEdit}
          isValue={isValue}
          setValue={setValue}
        />
      </div>
      <br />
      <div className="titleTable">
        <TestTable
          isInput={isInput}
          setInput={setInput}
          isEdit={isEdit}
          setEdit={setEdit}
          isValue={isValue}
          setValue={setValue}
        />
      </div>
    </div>
  );
};

export default Home;

