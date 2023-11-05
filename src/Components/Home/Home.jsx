import Banner from "./Banner/Banner";
import ReactTab from "./Tab/ReactTab";



const Home = () => {
    return (
        <div className="mb-20">
            <Banner></Banner>
            <div className="my-20 text-center">
                <h2 className="text-4xl font-semibold my-10 text-gray-900">Find Out <span className="text-[#ff0061]">Jobs</span></h2>
                <ReactTab></ReactTab>
            </div>
        </div>
    );
};

export default Home;