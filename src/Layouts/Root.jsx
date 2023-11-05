import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Root = () => {
    return (
        <div >

            <div className="max-w-7xl mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Root;