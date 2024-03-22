import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Accordion from "./component/Accordian/Accordian";
import RandomColor from "./component/RandomColor/RandomColor";
import Home from "./component/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/accordian",
      element: <Accordion></Accordion>,
    },
    {
      path: "/random-color",
      element: <RandomColor></RandomColor>,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
