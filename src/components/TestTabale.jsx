import React from "react";
import AddForm from "./AddForm";
// Remove the object with id 3
// const updatedData = data.filter(obj => obj.id !== 3);

 


const TestTable = (props) => {
  const { isEdit, setEdit, isValue, setValue, setInput } = props;

  console.log("Home", isValue);
  
 const handleClick = (evt) => {
   remove(evt.target.id);
 };
  const editClick = (id) => {
    setEdit(true)
    console.log('id===>', id);
    const findCurrData = isValue?.find((data) => data?.id === id);
    console.log('findCurrData', findCurrData);
    setInput(findCurrData)
    // remove(evt.target.id);
  };

  //  const editClick = (id) => {
  //   // setEdit(true)
  //   console.log("id", id);
  //   //  setValue(isValue.filter((todo) => todo.id !== id));
  //  };

   const remove = (id) => {
     setValue(isValue.filter((todo) => todo.id !== id));
   };
// setInput({ id: user.id, name: user.name });
// useEffect(() => {
//  return setInput({ id: user.id, name: user.name });
// }, []);

  return (
    <div>
      <div className="tableClass">Show Table</div>

      {/* <div style={{ display: "flex" }}>Name : {isValue}</div> */}
      <ul>
        {isValue?.map((user) => (
          // <User key={user?.id} name={user?.name} />
          <div key={user?.id} className="userList">
            <div>Name: {user?.name}</div>
            <div>
              <button onClick={handleClick} id={user.id}>
                delete
              </button>
            </div>
            <div>
              <button onClick={(e) => editClick(user?.id)}>edit</button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default TestTable;
