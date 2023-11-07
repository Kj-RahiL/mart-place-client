import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Components/Shared/Footer";


const Root = () => {
    return (
        <div className="">

            <div className="max-w-7xl mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Root;