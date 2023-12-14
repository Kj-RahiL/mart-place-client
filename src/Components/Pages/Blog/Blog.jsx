import { useEffect, useState } from "react";
import background from '../../../assets/Banner/bg.png'
import { FaCalendar, FaUser } from "react-icons/fa";
import Title from "../../Shared/Title";

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div className="pb-20 bg-cover bg-pink-50" style={{ backgroundImage: `url(${background})` }}>
            <Title title='OUR LATEST BLOG'></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5">
                {
                    blogs.map((blog, index) => <div key={index} className="card w-full bg-black text-white shadow-md shadow-pink-500">
                        <figure className="relative h-[300px]">
                                <div className="absolute top-2 left-2 p-2 rounded-sm bg-pink-500 text-white">
                                    <span className="ml-2">{formatDate(blog.date)}</span>
                                </div>
                                <img className="h-full w-full" src={blog.image_url} alt="Shoes" />
                            </figure>
                        <div className="card-body">
                            <div className="flex flex-wrap justify-between items-center -mt-5 mb-5">
                                <div>
                                    <h3 className="flex items-center gap-5 text-gray-500"><FaUser></FaUser>{blog.author}</h3>
                                    
                                </div>
                                <h2 className="px-3 py-1 rounded  text-center border bg-blue-gray-800 ">{blog.category}</h2>
                            </div>
                            <h2 className="card-title">{blog.title}
                            </h2>
                            <p className="text-gray-300">
                                {
                                    blog.content.length > 200 ? blog.content.slice(0, 200) + "..." : blog.content
                                }
                                <span className="text-pink-700">more</span>
                            </p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blog;



