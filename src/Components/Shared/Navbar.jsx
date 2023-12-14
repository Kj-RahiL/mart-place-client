import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import avatar from '../../../public/icons8-avatar-48.png'
import { MdLogin } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log('sign out successfully')
                toast.success('Sign Out successfully!')
            })
            .catch(error => {
                console.error(error.message)
            })
    }

    const link = <>
        <li><NavLink to="/"
            style={({ isActive }) => {
                return {
                    color: isActive ? '#ff0061' : '',
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',

                };
            }}

        >Home</NavLink></li>
        {
            !user ? <>
                <li className="visible md:hidden"><NavLink to="MartPlace/addJob"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? '#ff0061' : '',
                            fontWeight: isActive ? "bold" : "",
                            background: isActive ? "none" : '',
                        };
                    }}

                >Add Jobs</NavLink></li>

            </> : <>
                <li><NavLink to="MartPlace/myPostedJob"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? '#ff0061' : '',
                            fontWeight: isActive ? "bold" : "",
                            background: isActive ? "none" : '',
                        };
                    }}

                >My Posted Jobs</NavLink></li>

                <li><NavLink to="MartPlace/myBids"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? '#ff0061' : '',
                            fontWeight: isActive ? "bold" : "",
                            background: isActive ? "none" : '',
                        };
                    }}

                >My Bids</NavLink></li>

                <li><NavLink to="MartPlace/bidRequest"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? '#ff0061' : '',
                            fontWeight: isActive ? "bold" : "",
                            background: isActive ? "none" : '',
                        };
                    }}

                >Bid Request</NavLink></li>
            </>
        }
        <li><NavLink to="/blog"
            style={({ isActive }) => {
                return {
                    color: isActive ? '#ff0061' : '',
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',

                };
            }}

        >Blog</NavLink></li>
        <li><NavLink to="/contact"
            style={({ isActive }) => {
                return {
                    color: isActive ? '#ff0061' : '',
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',

                };
            }}

        >Contact</NavLink></li>

    </>


    return (
        <motion.div className="navbar bg-base-100" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>
                <Link to='/' className=" text-3xl font-bold"><h2><span className="text-[#4e002d]">Mart</span><span className="text-[#ff0061]">Place</span></h2></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ?
                        <div className="dropdown dropdown-end flex gap-5">
                            <li className=" hidden sm:block">
                                <Link to="MartPlace/addJob"
                                    className="btn btn-ghost normal-case bg-[#ff0061] text-white hover:bg-[#4e002d]"
                                ><FaPlus></FaPlus>Add Job</Link>
                            </li>
                            <label tabIndex={0} className="btn  bg-transparent flex">
                                <h2 className="font-light mr-2 rounded">{user?.displayName} </h2>
                                <img className="w-8 rounded-full " src={user?.photoURL ? user?.photoURL : avatar} alt="" />
                            </label>
                            <ul tabIndex={0} className="menu dropdown-content z-[1] p-4 shadow border-2 bg-neutral-500 text-white bg-blend-overlay rounded-box mt-14">
                                <li><button onClick={handleSignOut} className="btn btn-ghost  hover:bg-[#F4AF00] normal-case font-semibold">SignOut</button></li>
                            </ul>
                        </div> :
                        <div className=" flex justify-center gap-5">
                            <Link to="MartPlace/addJob"
                                className="btn btn-ghost normal-case bg-[#ff0061] text-white hover:bg-[#4e002d] "
                            ><FaPlus></FaPlus>Add Job</Link>
                            <Link to='/signIn' className="btn btn-ghost text-[#4e002d] normal-case font-semibold"><MdLogin></MdLogin> Login</Link>
                        </div>
                }
            </div>
        </motion.div>
    );
};

export default Navbar;