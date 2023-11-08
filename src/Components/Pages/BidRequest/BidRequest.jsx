import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
// import { useLoaderData } from "react-router-dom";
import BidReqCart from "./BidReqCart";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const BidRequest = () => {
    const { user, logOut } = useContext(AuthContext)
    const [bidRequest, setBidRequest] = useState([])
    const navigate = useNavigate()

    //   const bids = useLoaderData()
    // console.log(bids)
    // useEffect(() => {
    //     const myBid = bids?.filter(bid => bid.buyerEmail == user.email)
    //     setBidRequest(myBid)
    // }, [])

    const url = `http://localhost:5000/myBid?buyerEmail=${user?.email}`
    useEffect(()=>{
        axios.get(url, {withCredentials:true})
        .then(res=>setBidRequest(res.data))
        .catch(error => {
            if (error.response.status === 401 || error.response.status === 403) {
                logOut()
                    .then(() => {
                        navigate('/signIn')
                        toast.error('UnAuthorized Access, LogOut user')
                    })
                    .catch(error => {
                        console.error(error.message)
                    })
            }
        });
    },[])


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
                    const remaining = bidRequest?.filter(bid => bid._id !== id)
                    const updated = bidRequest?.find(bid => bid._id !== id)
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