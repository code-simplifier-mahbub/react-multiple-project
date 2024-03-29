import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Accordion from "./component/Accordian/Accordian";
import RandomColor from "./component/RandomColor/RandomColor";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import RatingStar from "./component/RatingStar/RatingStar";
import SlideImages from "./component/SlideImages/SlideImages";

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
    {
      path: "/image-slider",
      element: (
        <SlideImages
          url={"https://picsum.photos/v2/list"}
          pages={"1"}
          limit={"5"}
        />
      ),
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
