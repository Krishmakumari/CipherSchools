import { useContext, useState } from "react";
import AddTask from "./components/AddTask";
import TODOScreen from "./screens/TODOScreen";
import {createBrowserRouter, RouterProvider, useActionData} from "react-router-dom";
import {TaskProvider} from "./context/TaskContext";

const router=createBrowserRouter([
  {
    path: "/",
    element: <TODOScreen />
  },
  {
    path: "/add-task",
    element: <AddTask />,
  }
]);

const App=()=>{
  return(
    <TaskProvider>
    <RouterProvider router={router}/>
    </TaskProvider>
  );
};
export default App;