import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Root from "../Layouts/Root";
import SignIn from "../Components/Pages/register/SignIn";
import SignUp from "../Components/Pages/register/SignUp";
import AddJob from "../Components/Pages/Addjob/AddJob";
import MyPostedJobs from "../Components/Pages/MyPostedJobs/MyPostedJobs";
import MyBids from "../Components/Pages/MyBids/MyBids";
import BidRequest from "../Components/Pages/BidRequest/BidRequest";
import JobDetails from "../Components/Home/JobDetails/JobDetails";
import ErrorElement from "../Components/Pages/ErrorElement/ErrorElement";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorElement></ErrorElement>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/addJob',
            element:<AddJob></AddJob>
        },
        {
            path:'/jobDetails/:id',
            element:<JobDetails></JobDetails>,
            loader: ({params})=> fetch(`http://localhost:5000/jobDetails/${params.id}`)
        },
        {
            path:'/myPostedJob',
            element:<MyPostedJobs></MyPostedJobs>
        },
        {
            path:'/myBids',
            element:<MyBids></MyBids>
        },
        {
            path:'/bidRequest',
            element:<BidRequest></BidRequest>
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