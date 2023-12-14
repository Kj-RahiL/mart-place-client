import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import loginAni from './loginAni.json'
import { toast } from "react-toastify";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";

const SignIn = () => {
    const { signInUser, googleLogin, } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()

    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        // console.log(password, email)

        signInUser(email, password)
            .then(result => {
                console.log(result.user)

                navigate(location?.state ? location.state : '/')
                toast.success('User Log In Successfully!')
                // form.reset('')

                

            })
            .catch(error => {
                console.error(error);
                toast.error("Oops!! password or email doesn't match. please valid password or email");
            })


    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log('from login', result.user)
            })
            .catch(error => {
                console.error(error.message);
            })
    }
    return (

        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col md:flex-row max-w-5xl mx-auto gap-5">
                <div className="text-center md:text-left hidden sm:block flex-1">
                    <div className="">
                        <Lottie animationData={loginAni}></Lottie>
                    </div>
                </div>
                <div className="card w-full max-w-xl shadow-2xl bg-base-100 flex-1">
                    <div className="text-center mt-5 space-y-2">
                        <h1 className="text-3xl md:text-5xl font-bold">Welcome Back!!</h1>
                        <p className="md:text-lg text-gray-500 font-semibold">Log In to Your MartPlace Account!</p>
                        <div className="card-body mb-5">
                            <button onClick={handleGoogleLogin} className="flex w-full  justify-center btn md:text-xl normal-case font-medium"><FcGoogle></FcGoogle> Continue With Google</button>
                        </div>
                    </div>
                    <form onSubmit={handleSignIn} className="card-body mx-0 md:mx-8">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn text-white hover:text-gray-800 normal-case bg-red-500 font-semibold text-lg">Sign In</button>

                        </div>
                        <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            New to here? Please
                            <Link
                                className="font-medium text-red-500 transition-colors hover:text-blue-700"
                                to='/signUp'
                            >
                                <span> Sign Up</span>
                            </Link>
                        </p>
                    </form>

                </div>
            </div>
        </div>

    );
};

export default SignIn;