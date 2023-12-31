import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import MyPostedCart from "./MyPostedCart";


const MyPostedJobs = () => {
    const { user } = useContext(AuthContext)
    const [postedJob, setPostedJobs] = useState([])
    const url = `https://mart-place-server.vercel.app/jobs?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPostedJobs(data))
    }, [])
    return (
        <div className="my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
                {
                    postedJob.map(post => <MyPostedCart 
                        key={post?._id} 
                        post={post}
                        postedJob={postedJob}
                        setPostedJobs={setPostedJobs}
                        ></MyPostedCart>)
                }
            </div>
        </div>
    );
};

export default MyPostedJobs;