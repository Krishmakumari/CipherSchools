import { useState } from "react";

const AddTask =()=>{

    const [task,setTask ]= useState({
        title: "",
        description:"",
    });


    let handleinputchange =(e) =>{
       setTask({
        ...task,
        [e.target.name]: e.target.value,
       });
    };

    let onFormSubmit=(e)=>{
        e.preventDefault();
        console.log(task);
    }

    return (
        <>
        <h3 className="ui heading centser">Add New Task</h3>
        <div className="ui form">
        <form onSubmit={onFormSubmit}>
        <div className="field">
    <label>Title</label>
    <input type="text"  placeholder="Task title"
    spellCheck={false}
     data-ms-editor={true} name="title" 
    onChange={handleinputchange}  />
  </div>
  <div className="field">
    <label>Description</label>
    <textarea rows="2" 
    spellCheck={false} data-ms-editor={true}
    placeholder="Task description" name="description"
    onChange={handleinputchange} />
  </div>
  <button type="submit"
   className="ui primary button">
  Submit
</button>
        </form>
        </div>
        </>
    )
}
export default AddTask;