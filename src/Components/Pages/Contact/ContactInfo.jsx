import { BsHouseAdd, BsMailbox, BsPhone, } from "react-icons/bs";

const ContactInfo = () => {
    return (
        <div className="bg-white">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-20 justify-center py-20  gap-10">
                <div className="card  shadow-xl ">
                    <div className="card-body ">
                        <h2 className="text-3xl text-pink-600"><BsHouseAdd ></BsHouseAdd></h2>
                        <h2 className="text-2xl font-mediu">Address</h2>
                        <p className="">38-2 Hilton Street, Chittagong</p>
                    </div>
                </div>

                <div className="card shadow-xl">
                    <div className="card-body">
                        <h2 className="text-3xl text-pink-600"><BsPhone></BsPhone></h2>
                        <h2 className=" text-2xl font-medium">Phone</h2>
                        <p className="">(+01) 123 456 7890</p>
                    </div>
                </div>

                <div className="card  shadow-xl ">
                    <div className="card-body">
                        <h2 className="text-3xl text-pink-600"><BsMailbox></BsMailbox></h2>
                        <h2 className=" text-2xl font-medium">Email</h2>
                        <p className="">inform@dvents.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;