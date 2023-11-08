

const WhyChooseCart = ({ cart }) => {
    const {id, title, icons, description} = cart

    return (
        <div className="card bg-white shadow-xl">
            <h2 className="text-4xl pl-10 pt-8 text-[#00615437]">0{id}</h2>
            <figure className="px-10 pt-10">
                <img src={icons} alt="Shoes" className="rounded-xl w-20" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="text-2xl text-[#4e002d] font-bold">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default WhyChooseCart;