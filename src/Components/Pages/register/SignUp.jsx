import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import register from './register.json'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";


const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSignUp = (e) => {
        e.preventDefault()
        console.log('handle sign up')
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, photo, password, email)

        // password validation
        if (password.length < 6) {
            toast.error('Password should be 6 character')
            return;
        }
        else if (!/.*[A-Z].*/.test(password)) {
            toast.error('Please, at least one capital latter')
            return;
        }
        else if (!/.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-].*/.test(password)) {
            toast.error('Please, at least one special character')

            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('User Sign Up Successfully!')
                form.reset('')
                  navigate(location?.state? location.state :'/')
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200 ">

            <div className="hero-content flex-col md:flex-row max-w-5xl mx-auto">
                <div className="text-center hidden sm:block max-w-xl flex-1">
                    <div className="w-96">
                        <Lottie animationData={register}></Lottie>
                    </div>

                </div>
                <div className="card w-full max-w-xl shadow-2xl bg-base-100 flex-1">
                    <div className="text-center mt-12 space-y-2 mx-8">
                        <h1 className="text-4xl font-bold">Welcome to MartPlace!!</h1>
                        <p className="text-lg text-gray-500 font-semibold">Sign Up for your better experience</p>

                    </div>
                    <form onSubmit={handleSignUp} className="card-body md:mx-8">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="link" name="photo" placeholder="Photo" className="input input-bordered" required />
                        </div>
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
                            <button className="btn text-white hover:text-gray-800 normal-case bg-red-500 font-semibold text-lg">Sign Up</button>

                        </div>
                        <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            Already have an account?
                            <Link
                                className="font-medium text-red-500 transition-colors hover:text-blue-700"
                                to='/signIn'
                            >
                                Sign In
                            </Link>
                        </p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp;