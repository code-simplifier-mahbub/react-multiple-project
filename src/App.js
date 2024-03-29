import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Accordion from "./component/Accordian/Accordian";
import RandomColor from "./component/RandomColor/RandomColor";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import RatingStar from "./component/RatingStar/RatingStar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
          path: "/home",
          element: <Home></Home>,
        },
      ],
    },
    {
      path: "/accordian",
      element: <Accordion></Accordion>,
    },
    {
      path: "/random-color",
      element: <RandomColor></RandomColor>,
    },
    {
      path: "/rating-star",
      element: <RatingStar></RatingStar>,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
