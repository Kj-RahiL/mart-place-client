import { useEffect, useState } from "react";
import WhyChooseCart from "./WhyChooseCart";


const WhyChose = () => {
    const [choseCart, setChoseCart]= useState([]);
    useEffect(()=>{
        fetch('/whyChoose.json')
        .then(res=>res.json())
        .then(data=>setChoseCart(data))
    },[])

    return (
        <div>
             <h2 className="text-4xl font-bold text-center pt-10 my-3  text-[#4e0061]">Why Choose <span className="text-[#ff0061]"> MartPlace</span></h2>
            <p className="text-[#4e0061] text-2xl mb-10  text-center font-light w-4/5 lg:w-1/2 mx-auto"> <span className="text-[#4e0061]"> MartPlace</span> essential to highlight the unique benefits and value propositions that your marketplace offers to both buyers and sellers.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto w-11/12 pb-10">
                {
                    choseCart.map(cart=><WhyChooseCart key={cart.id} cart={cart}></WhyChooseCart>)
                }
            </div>
        </div>
    );

};

export default WhyChose;