import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";



const Root = () => {
    return (
        <div >

            <div className="max-w-7xl mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default Root;