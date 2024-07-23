// import { createContext, useState } from "react";
// import {v4 as randomUUID} from "uuid";

// const TaskContext =createContext();
// const Task_editable_field_list=["title","description"];

// const TaskProvider=({ children })=>{
//     const [taskList, setTaskList]=useState([]);

//     const addNewTask =(task)=>{
//         setTaskList([...taskList,
//             {...task, createdDate: new Date(), taskId: randomUUID()},

//          ]);
//     };

//     const deleteTask =(taskId)=>{
//        setTaskList( taskList.filter((task)=> task.taskId !== taskId));
//     };

//     const editTask=(taskId)=>{
//         let tempTaskList=[...taskList];
//         for (let t of taskList){
//             if(t.taskId ===task.taskId){
//                 Task_editable_field_list.forEach((field) => (t[field] = task[field]));
//             }
//         }
//         setTaskList(taskList);
//     };




//     return(
//         <TaskContext.Provider value={{taskList, addNewTask,deleteTask , editTask}} >
//         {children}
//         </TaskContext.Provider>
//     );
// };

// export {TaskProvider};
// export default TaskContext;

import { createContext, useState } from "react";
import { v4 as randomUUID } from "uuid";

const TaskContext = createContext();
const Task_editable_field_list = ["title", "description"];

const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  const addNewTask = (task) => {
    setTaskList([
      ...taskList,
      { ...task, createdDate: new Date(), taskId: randomUUID() },
    ]);
  };

  const deleteTask = (taskId) => {
    setTaskList(taskList.filter((task) => task.taskId !== taskId));
  };

  const editTask = (taskId, updatedTask) => {
    let tempTaskList = taskList.map((task) => {
      if (task.taskId === taskId) {
        Task_editable_field_list.forEach(
          (field) => (task[field] = updatedTask[field])
        );
      }
      return task;
    });
    setTaskList(tempTaskList);
  };

  return (
    <TaskContext.Provider
      value={{ taskList, addNewTask, deleteTask, editTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskProvider };
export default TaskContext;
