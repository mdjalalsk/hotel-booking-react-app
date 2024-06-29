import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Rooms from "../pages/Rooms";
import Contact from "../pages/Contact";
import MainLayout from "../layouts/MainLayout";
import MyBookings from './../pages/MyBookings';
import Login from "../pages/Login";
import Register from "../pages/Register";
import RoomDetails from "../pages/RoomDetails";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path:"/",
            element: <Home/>,
          },
          {
            path: 'about',
            element: <About />,
          },
          {
            path: '/rooms',
            element:<Rooms />,
          },
          {
            path: '/room/:id',
            element:<PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
          },
          {
            path: '/contact',
            element: <Contact />,
          },
          {
            path: '/myBooking',
            element:<PrivateRoute> <MyBookings /></PrivateRoute>,
          },
      ], 
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ]);
  export default routes;