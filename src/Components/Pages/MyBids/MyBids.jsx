import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import MyBidsCart from "./MyBidsCart";
import { toast } from "react-toastify";


const MyBids = () => {
    const {user} = useContext(AuthContext)
    const [myBid, setMyBid] = useState([])
    const url = `http://localhost:5000/myBid?userEmail=${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMyBid(data))
    },[])

    const handleComplete = id => {
        fetch(`http://localhost:5000/myBid/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'complete' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    // update
                    const remaining = myBid.filter(bid => bid._id !== id)
                    const updated = myBid.find(bid => bid._id !== id)
                    updated.status = 'complete'
                    const newBid = [updated, ...remaining]
                    setMyBid(newBid)
                    toast.success('Bid conform ')
                }
            })

    }

    return (
        <div className="my-20 mx-5">

            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr className="text-xl text-[#4e002d]">
                            <th>Job title</th>
                            <th>Buyer Email</th>
                            <th>price</th>
                            <th>Deadline</th>
                            <th>Status</th>
                            <th>Complete</th>
                        </tr>
                    </thead>
                    <tbody className="text-lg font-medium text-gray-700">
                    
                        {
                            myBid.map(bid=> <MyBidsCart
                                key={bid._id} bid={bid}
                                handleComplete={handleComplete}
                            ></MyBidsCart>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyBids;