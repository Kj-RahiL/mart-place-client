import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Root from "../Layouts/Root";
import SignIn from "../Components/Pages/register/SignIn";
import SignUp from "../Components/Pages/register/SignUp";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/signIn',
          element: <SignIn></SignIn>
      },
      {
          path:'/signUp',
          element: <SignUp></SignUp>
      }
      ]
    },
    
  ]);

export default router;