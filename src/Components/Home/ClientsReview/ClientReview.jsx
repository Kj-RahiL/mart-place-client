import { useEffect, useState } from "react";
import ClientCart from "./ClientCart";


const ClientReview = () => {
    const [clients, setClients]= useState([]);
    useEffect(()=>{
        fetch('/clients.json')
        .then(res=>res.json())
        .then(data=>setClients(data))
    },[])
    console.log(clients)
    return (
        <div className=" bg-base-200">
            <h2 className="text-4xl font-bold text-center pt-10 my-3  text-[#4e0061]">Our Clients <span className="text-[#ff0061]">Feedback</span></h2>
            <p className="text-[#4e0061] text-2xl mb-10  text-center font-light w-1/2 mx-auto">Laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats. Lid est laborum dolo rumes fugats untras.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto w-11/12 pb-10">
                {
                    clients.map(client=><ClientCart key={client.id} client={client}></ClientCart>)
                }
            </div>
        </div>
    );
};

export default ClientReview;