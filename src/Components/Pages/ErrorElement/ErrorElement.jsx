import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/ZTJY6Fn/tree-736885-1280.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5  tracking-widest text-9xl text-white font-extrabold">4<span className="text-amber-500">0</span>4</h1>
                    <p className="mb-5 text-white font-semibold text-2xl ">Oops..!! Page Not Found</p>
                    <Link to='/'>
                        <button className="btn text-white hover:text-black bg-[#ff3837]">Go Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorElement;