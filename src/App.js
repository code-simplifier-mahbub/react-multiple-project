import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Accordion from "./component/Accordian/Accordian";
import RandomColor from "./component/RandomColor/RandomColor";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Accordion></Accordion>,
    },
    {
      path: "/random",
      element: <RandomColor></RandomColor>,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
