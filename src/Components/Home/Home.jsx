import Contact from "../Pages/Contact/Contact";
import HomeContact from "../Pages/Contact/HomeContact";
import Banner from "./Banner/Banner";
import ClientReview from "./ClientsReview/ClientReview";
import ReactTab from "./Tab/ReactTab";
import WhyChose from "./WhyChoose.jsx/WhyChose";



const Home = () => {
    return (
        <div className="mb-20">
            <Banner></Banner>
            <div className="my-20 text-center">
                <h2 className="text-4xl font-semibold my-10 text-gray-900">Find Out <span className="text-[#ff0061]">Jobs</span></h2>
                <ReactTab></ReactTab>
            </div>
            <WhyChose></WhyChose>
            <ClientReview></ClientReview>
            <HomeContact></HomeContact>
        </div>
    );
};

export default Home;