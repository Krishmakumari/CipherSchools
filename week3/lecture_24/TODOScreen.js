import {useState} from "react";
import Task from "../components/Task";
import AddTask from "../components/AddTask";


const TODOScreen=()=>{

    const [tasklist,setTasklist]=useState([]);

    let addNewTask =(task)=>{
        setTasklist([...tasklist, {...task, createdDate: new Date()}]);
    };
    return (
        <>
                <div className="screen">
                <h1 className="ui heading center">To 
                Do List</h1>
                <div>
                    <button
                     onClick={(e)=>{
                        setTasklist([...tasklist,
                            {
                            title: "Go to gym",
                            description: "Going to the gym is good for muscle growth.",
                            createdDate: new Date(),
                        },
                    ]);
                    }}
                     className="ui secondary button">
                        Add task
                        </button>
                        <section>
                     <div className="ui cards">
                     {tasklist.map((task,index)=> (
                        <Task task={task}  key={index} />    
                        ))}
                </div>
                </section>
                </div>
                <AddTask  onSubmit={addNewTask} />
                </div>
                </>
                );
}

export default TODOScreen;