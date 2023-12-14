

const Title = ({ title}) => {
    return (
        <div className="hero bg-gradient-to-r from-pink-100 from-30% via-pink-400 via-70% py-2">
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md py-5 pt-10 ">
                <h1 className=" text-[#ff0061] text-center text-5xl font-bold uppercase">{title}</h1>
            </div>
        </div>
         
    </div>
    );
};

export default Title;