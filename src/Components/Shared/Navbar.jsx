import { Link, NavLink } from "react-router-dom";
// import logo from '../../assets/logo.png'
// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";
// import { toast } from "react-toastify";


const Navbar = () => {
    // const {user, logOut} = useContext(AuthContext)
    // // console.log('navbar photo' ,user?.photoURL,user?.displayName )
    // const handleSignOut = () => {
    //     logOut()
    //         .then(() => {
    //             console.log('sign out successfully')
    //            toast.success('Sign Out successfully!')
    //         })
    //         .catch(error => {
    //             console.error(error.message)
    //         })
    // }

    const link = <>
        <li><NavLink to="/"
            style={({ isActive }) => {
                return {
                    color: isActive? '#ff3837' : '',
                    borderBottom: isActive ? "2px solid #ff3837" : "black",
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',
                    
                };
            }}

        >Home</NavLink></li>
       

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
               <Link to='/' className=""><h2>MartPlace</h2></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <div className=" ">
                    
                        {
                            user ? <div className="flex flex-col space-y-1" >
                                <img className="w-8 rounded-full" src={user?.photoURL} alt="" />
                                <h2 className="text-sm font-light">{user?.displayName} </h2>
                                
                            </div>
                            : ''
                      
                        }
                    
                </div>
                {
                    user ?
                        <button onClick={handleSignOut} className="btn btn-ghost">SignOut</button>
                        :
                        <Link to='/login' className="btn btn-ghost">Login</Link>
                } */}
                <Link to='/signIn' className="btn btn-ghost">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;