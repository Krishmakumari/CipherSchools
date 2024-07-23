import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

const AddTask =()=>{
    const{addNewTask} = useContext(TaskContext);
    const navigate=useNavigate();


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
        addNewTask(task);
        setTask({});
        navigate("/");

    }

    return (
        <section className="screen">
        <h3 className="ui heading centser">Add New Task</h3>
        <div className="ui form">
        <form onSubmit={onFormSubmit}>
        <div className="field">
    <label>Title</label>
    <input type="text"  placeholder="Task title"
    spellCheck={false}
     data-ms-editor={true} name="title" 
    onChange={handleinputchange}
    value={task.title}
      />
  </div>
  <div className="field">
    <label>Description</label>
    <textarea rows="2" 
    spellCheck={false} data-ms-editor={true}
    placeholder="Task description" name="description"
    onChange={handleinputchange}
    value={task.description}
     />
  </div>
  <button type="submit"
   className="ui primary button">
  Submit
</button>
        </form>
        </div>
        </section>
    
    )
}
export default AddTask;
