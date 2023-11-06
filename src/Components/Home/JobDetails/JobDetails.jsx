import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const JobDetails = () => {
    const { user } = useContext(AuthContext)
    const job = useLoaderData()
    const { title, email, deadline, minPrice, maxPrice, description } = job;
    console.log(job)

    const handleBid = (e) => {
        e.preventDefault();
        console.log('from bid')
    }
    return (
        <div className="card w-96 mx-auto mt-20 bg-slate-50 shadow-md">
            <div className="card-body">

                <h2 className="text-2xl font-bold text-[#4e002d]">{title}</h2>
                <p className="text-xl font-semibold">Deadline: {deadline}</p>
                <p className="text-xl font-semibold ">Salary-Range: <span className="text-[#4e002d]">${minPrice}-{maxPrice}</span></p>
                <p className="font-medium text-gray-600">{description}</p>
                <div className="card-actions w-full my-5">
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn w-full normal-case bg-[#4e002d] hover:bg-[#ff002d] text-white" onClick={() => document.getElementById('my_modal_3').showModal()}>Place Your Bid</button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>

                            <h3 className=" my-4 font-bold text-lg text-[#4e002d]">Applied Job: <span className="text-[#ff0061]">{title}</span></h3>

                            <form onSubmit={handleBid}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-medium text-[#63433f]">Price</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="deadline" placeholder="Your Biding Amount" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-medium text-[#63433f]">Deadline</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="deadline" placeholder="Enter deadline" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-medium text-[#63433f]">User Email</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text"
                                            name="userEmail"
                                            value={user.email}
                                            readOnly
                                            className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-xl font-medium text-[#63433f]">Job Owner Email</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text"
                                            name="ownerEmail"
                                            value={email}
                                            readOnly
                                            className="input input-bordered w-full" />
                                    </label>
                                </div>
                                {
                                    user.email === email ? 
                                    <input disabled="disabled" className="btn btn-block my-4 normal-case hover:bg-[#4e002d] bg-[#ff0061] text-white" type="submit" value="Bid on the Project" /> :
                                    <input className="btn btn-block my-4 normal-case hover:bg-[#4e002d] bg-[#ff0061] text-white" type="submit" value="Bid on the Project" />
                                }
                            </form>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;