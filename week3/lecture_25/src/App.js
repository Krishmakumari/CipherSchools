import { useState } from "react";
import AddTask from "./components/AddTask";
import TODOScreen from "./screens/TODOScreen";
import {createBrowserRouter, RouterProvider, useActionData} from "react-router-dom";

const router=createBrowserRouter([
  {
    path: "/",
    element: <TODOScreen />
  },
  {
    path: "/add-task",
    element: <AddTask />

  }
])

const App=()=>{
  const [tasks,setTasks]=useState([]);
  return <RouterProvider router={router} />;
};

export default App;