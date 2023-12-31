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
import PrivateRoute from "./PrivateRoute";
import Update from "../Components/Pages/MyPostedJobs/Update";
import Blog from "../Components/Pages/Blog/Blog";
import Contact from "../Components/Pages/Contact/Contact";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'MartPlace/addJob',
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
                path: '/jobDetails/:id',
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://mart-place-server.vercel.app/jobs/${params.id}`)
            },
            {
                path: "/updateJob/:id",
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({ params }) => fetch(`https://mart-place-server.vercel.app/jobs/${params.id}`)
            },
            {
                path: 'MartPlace/myPostedJob',
                element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
            },
            {
                path: 'MartPlace/myBids',
                element: <PrivateRoute><MyBids></MyBids></PrivateRoute>,

            },
            {
                path: 'MartPlace/bidRequest',
                element: <PrivateRoute><BidRequest></BidRequest></PrivateRoute>,
                loader: () => fetch('https://mart-place-server.vercel.app/myBid')
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }
        ]
    },

]);

export default router;