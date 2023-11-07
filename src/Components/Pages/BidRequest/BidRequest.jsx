import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import BidReqCart from "./BidReqCart";
import { toast } from "react-toastify";


const BidRequest = () => {
    const { user } = useContext(AuthContext)
    const bids = useLoaderData()
    const [bidRequest, setBidRequest] = useState([])
    useEffect(() => {
        const myBid = bids.filter(bid => bid.buyerEmail == user.email)
        setBidRequest(myBid)
    }, [])

    const handleAccept = id => {
        fetch(`http://localhost:5000/myBid/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'accepted' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    // update
                    const remaining = bidRequest.filter(bid => bid._id !== id)
                    const updated = bidRequest.find(bid => bid._id !== id)
                    updated.status = 'accepted'
                    const newBid = [updated, ...remaining]
                    setBidRequest(newBid)
                    toast.success('request accepted')
                }
            })

    }
    const handleReject = id => {
        fetch(`http://localhost:5000/myBid/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'reject' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    // update
                    const remaining = bidRequest.filter(bid => bid._id !== id)
                    const updated = bidRequest.find(bid => bid._id !== id)
                    updated.status = 'reject'
                    const newBid = [updated, ...remaining]
                    setBidRequest(newBid)
                    toast.success('request rejected')
                }
            })

    }
    // console.log('hewjf', id)
    return (
        <div className=" bg-base-100">
            <h2>bid:{bids.length}</h2>
            <h2>bid rew:{bidRequest.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
                {
                    bidRequest.map(bidReq => <BidReqCart
                        key={bidReq._id}
                        bidReq={bidReq}
                        handleAccept={handleAccept}
                        handleReject={handleReject}
                    ></BidReqCart>)
                }
            </div>
        </div>
    );
};

export default BidRequest;