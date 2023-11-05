import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import loginAni from './loginAni.json'
const SignIn = () => {
    const handleSignIn = (e) => {
        e.preventDefault()
        console.log('handle sign in')
    }
    return (

        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row max-w-5xl mx-auto gap-5">
                <div className="text-center lg:text-left border flex-1">
                    <div className="">
                        <Lottie animationData={loginAni}></Lottie>
                    </div>
                </div>
                <div className="card w-full max-w-xl shadow-2xl bg-base-100 flex-1">
                    <div className="text-center mt-5 space-y-2">
                        <h1 className="text-5xl font-bold">Welcome Back!!</h1>
                        <p className="text-lg text-gray-500 font-semibold">Log In to Your MartPlace Account!</p>
                        <div className="card-body mb-5">
                            <button className="flex w-full  justify-center btn text-xl normal-case font-medium"><FcGoogle></FcGoogle> Continue With Google</button>
                        </div>
                    </div>
                    <form onSubmit={handleSignIn} className="card-body md:mx-8">
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
                            Already have an account?
                            <Link
                                className="font-medium text-red-500 transition-colors hover:text-blue-700"
                                to='/signUp'
                            >
                                Sign Up
                            </Link>
                        </p>
                    </form>

                </div>
            </div>
        </div>

    );
};

export default SignIn;