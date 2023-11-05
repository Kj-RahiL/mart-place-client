import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from 'react';
import background from '../../../assets/Banner/banner.jpg'

const Banner = () => {
   useEffect(()=>{
    AOS.init();
    AOS.refresh();
   },[])
    return (
        <div className="hero min-h-[90vh] " style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-overlay text-white bg-gradient-to-r from-[#5526380b] to-[#4e002efd]  bg-opacity-500"></div>
            <div data-aos="zoom-in-down" data-aos-duration="2000" className="hero-content text-center text-neutral-content">
                <div className="max-w-3xl">
                    <p className="text-white font-semibold">Welcome To The</p>
                    <h1 className="mb-5 text-white text-5xl font-bold">Awesome Creative MartPlace</h1>
                    <p className="mb-5 font-medium">MartPlace is the most powerful Online Market place & Create Jobs and find job!! </p>
                    <button className="btn bg-[#ec1a55] text-white hover:bg-transparent hover:border-[#f62d66] hover:border-2 normal-case">Explore Now</button>
                    <button className="btn bg-transparent text-white ml-5 hover:bg-[#ff0061] normal-case ">Find Job</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;