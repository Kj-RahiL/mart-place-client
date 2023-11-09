import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import { toast } from "react-toastify";



const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
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
                    color: isActive? '#ff0061' : '',
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',
                    
                };
            }}

        >Home</NavLink></li>

        <li><NavLink to="MartPlace/addJob"
            style={({ isActive }) => {
                return {
                    color: isActive? '#ff0061' : '',
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',
                    
                };
            }}

        >Add Job</NavLink></li>

        <li><NavLink to="MartPlace/myPostedJob"
            style={({ isActive }) => {
                return {
                    color: isActive? '#ff0061' : '',
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',
                };
            }}

        >My Posted Jobs</NavLink></li>

        <li><NavLink to="MartPlace/myBids"
            style={({ isActive }) => {
                return {
                    color: isActive? '#ff0061' : '',
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',
                };
            }}

        >My Bids</NavLink></li>

        <li><NavLink to="MartPlace/bidRequest"
            style={({ isActive }) => {
                return {
                    color: isActive? '#ff0061' : '',
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',
                };
            }}

        >Bid Request</NavLink></li>
       

    </>
    return (
        <div className="navbar bg-base-100">
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
                <div className=" ">
                    
                        {
                            user ? <div className="flex btn btn-ghost space-y-1" >
                                <img className="w-8 rounded-full" src={user?.photoURL} alt="" />
                                <h2 className="text-sm font-light">{user?.displayName} </h2>
                                
                            </div>
                            : ''
                      
                        }
                    
                </div>
                {
                    user ?
                        <button onClick={handleSignOut} className="btn btn-ghost text-[#4e002d] normal-case font-semibold">SignOut</button>
                        :
                        <Link to='/signIn' className="btn btn-ghost text-[#4e002d] normal-case font-semibold">Login</Link>
                }
               
            </div>
        </div>
    );
};

export default Navbar;