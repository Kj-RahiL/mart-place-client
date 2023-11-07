import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";


const AddJob = () => {
    const {user} = useContext(AuthContext)
    console.log(user.email)
    const handleAddJob = e =>{
        e.preventDefault()
        const form = e.target 
        const email = form.email.value
        const title = form.title.value
        const category = form.category.value
        const deadline = form.deadline.value
        const minPrice = form.minPrice.value
        const maxPrice = form.maxPrice.value
        const description = form.description.value
        const job = {email, title, category, deadline, minPrice, maxPrice, description}

        fetch('http://localhost:5000/jobs',{
            method:"POST",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(job)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
              form.reset('')
            toast.success('added job successfully')
        })
        
      console.log(job)
    }

    return (
        <div className="w-3/4 mx-auto  px-20 py-5 bg-[#ff00620f] card">
            <div className="space-y-2">
                <h2 className="text-3xl text-center py-5 font-bold text-[#4e002e]">Add New Product</h2>
            </div>
            <form  onSubmit={handleAddJob}>
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
                            <option disabled selected>Pick one any category</option>
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
                            <input type="date" name="deadline" placeholder="Enter deadline" className="input input-bordered w-full" />
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
                            <input type="text" name="minPrice" placeholder="Enter Minimum price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text text-xl font-medium text-[#63433f]"> Maximum price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="maxPrice" placeholder="Enter Maximum price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/*  Description */}
                <div className="form-control w-full mb-8">
                    <label className="label">
                        <span className="label-text text-xl font-medium text-[#63433f]">Description</span>
                    </label>
                    <label className="input-group">
                        <textarea name="description" className="textarea textarea-bordered w-full" placeholder="Write Short Description"></textarea>
                    </label>
                </div>
                <input className="btn btn-block normal-case hover:bg-[#ff0061] bg-[#4e002d] text-white" type="submit" value="Add Job" />
            </form>
        </div>
    );
};

export default AddJob;