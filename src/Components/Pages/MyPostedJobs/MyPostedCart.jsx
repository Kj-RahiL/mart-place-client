import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
// import axios from "axios";
// import { Link } from "react-router-dom";


const MyPostedCart = ({ post, postedJob, setPostedJobs }) => {
    const { user } = useContext(AuthContext)
    const { _id, title, category, deadline, minPrice, maxPrice, description } = post;

    const handleUpdate = (e) => {

        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const title = form.title.value
        const category = form.category.value
        const deadline = form.deadline.value
        const minPrice = form.minPrice.value
        const maxPrice = form.maxPrice.value
        const description = form.description.value
        const job = { email, title, category, deadline, minPrice, maxPrice, description }

        fetch(`http://localhost:5000/jobs/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(job)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset('')
                toast.success('added job successfully')
            })

        console.log(job)
    }

    const handleDelete = _id => {
        console.log('handle delete', _id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/jobs/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = postedJob.filter(job => job._id !== _id)
                            setPostedJobs(remaining)

                        }
                    })

            }
        })
    }

    return (
        <div className="card bg-slate-50 shadow-md">
            <div className="card-body">
                <div className="mx-auto">
                    <svg className="w-20 h-20 mb-4 text-[#4e002d]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                    </svg>
                </div>

                <h2 className="text-2xl font-bold text-[#4e002d]">{title}</h2>
                <p className="text-xl font-semibold">Deadline: {deadline}</p>
                <p className="text-xl font-semibold ">Salary-Range: <span className="text-[#4e002d]">${minPrice}-{maxPrice}</span></p>
                <p className="font-medium text-gray-600">{description}</p>
                <div className="flex justify-between">

                    <button onClick={() => handleDelete(_id)} className="btn btn-outline border-[#4e002d] hover:bg-[#4e002d]">Delete</button>


                    {/* updated button and click showing modal */}
                    <button className="btn btn-outline border-[#4e002d] hover:bg-[#4e002d]" onClick={() => document.getElementById('my_modal_3').showModal()}>Update</button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>

                            <h3 className=" my-4 font-bold text-lg text-[#4e002d]">Update Job: <span className="text-[#ff0061]">{title}</span></h3>

                            <form onSubmit={handleUpdate}>
                                {/* email and title row */}
                                <div className="md:flex mb-8 ">

                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text text-xl font-medium text-[#63433f]">Email</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text"
                                                name="email"
                                                value={user.email}
                                                readOnly
                                                placeholder="Enter Email" className="input input-bordered w-full" />
                                        </label>
                                    </div>

                                    <div className="form-control md:w-1/2 md:ml-4">
                                        <label className="label">
                                            <span className="label-text text-xl font-medium text-[#63433f]">Job Title</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text"
                                                name="title"
                                                defaultValue={title}
                                                placeholder="Job title"
                                                className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                </div>
                                {/* category and deadline row */}
                                <div className="md:flex mb-8">
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text text-xl font-medium text-[#63433f]">Category</span>
                                        </label>
                                        <select name="category" className="select select-bordered">
                                            <option disabled selected
                                                defaultValue={category}>Pick one any category</option>
                                            <option>Web Development</option>
                                            <option>Digital Marketing</option>
                                            <option>Graphics Design</option>
                                        </select>
                                    </div>
                                    <div className="form-control md:w-1/2 md:ml-4">
                                        <label className="label">
                                            <span className="label-text text-xl font-medium text-[#63433f]">Deadline</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="date" name="deadline"
                                                defaultValue={deadline}
                                                placeholder="Enter deadline" className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                </div>
                                {/* min and max price row  */}
                                <div className="md:flex mb-8">
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text text-xl font-medium text-[#63433f]">Minimum price</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name="minPrice"
                                                defaultValue={minPrice}
                                                placeholder="Enter Minimum price" className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                    <div className="form-control md:w-1/2 md:ml-4">
                                        <label className="label">
                                            <span className="label-text text-xl font-medium text-[#63433f]"> Maximum price</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name="maxPrice"
                                                defaultValue={maxPrice}
                                                placeholder="Enter Maximum price" className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                </div>
                                {/*  Description */}
                                <div className="form-control w-full mb-8">
                                    <label className="label">
                                        <span className="label-text text-xl font-medium text-[#63433f]">Description</span>
                                    </label>
                                    <label className="input-group">
                                        <textarea name="description"
                                            defaultValue={description}
                                            className="textarea textarea-bordered w-full" placeholder="Write Short Description"></textarea>
                                    </label>
                                </div>
                                <input className="btn btn-block normal-case hover:bg-[#ff0061] bg-[#4e002d] text-white" type="submit" value="Update Job" />
                            </form>
                        </div>
                    </dialog>
                </div>

            </div>
        </div>
    );
};

export default MyPostedCart;