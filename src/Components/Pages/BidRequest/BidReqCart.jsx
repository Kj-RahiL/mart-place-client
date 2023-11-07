

const BidReqCart = ({ bidReq, handleAccept, handleReject }) => {
    const { _id, title, userEmail, price, deadline, status } = bidReq
    console.log(status)
    return (
        <div className="card max-w-sm mx-auto bg-slate-50 shadow-md">
            <div className="card-body">
                <h2 className="text-2xl font-bold text-[#4e002d]">{title}</h2>
                <p className="text-lg font-semibold">Bid User : {userEmail}</p>
                <p className="text-lg font-semibold">Deadline: {deadline}</p>
                <p className="font-medium text-gray-600">Price: ${price}</p>
                <div>
                    {
                        status === "pending" ? <div className="flex justify-between my-5">
                            <button onClick={() => handleAccept(_id)} className="btn btn-outline">Accepted</button>
                            <button onClick={() => handleReject(_id)} className="btn btn-outline">Reject</button>
                        </div> :
                            <div className="flex justify-between">
                                <button className="btn btn-outline btn-disabled">Accepted</button>
                                <button className="btn btn-outline btn-disabled">Reject</button>
                            </div>

                    }
                </div>
            </div>
        </div>
    );
};

export default BidReqCart;