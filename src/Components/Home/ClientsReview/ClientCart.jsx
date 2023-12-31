import { BsChat } from "react-icons/bs";
import { motion } from "framer-motion";

const ClientCart = ({ client }) => {
    const {clientName, img, position, reviews}=client
    return (
        <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="border-l-2 border-blue-800 card-body shadow-sm bg-gray-50 relative flex w-full max-w-[26rem] flex-col rounded-sm bg-transparent bg-clip-border text-gray-700"
      >
        <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
          <img
            src={img}
            alt="tania andrew"
            className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {clientName}
              </h5>
            </div>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
              {position}
            </p>
          </div>
          <motion.h3 whileHover={{ scale: 1.2 }}>
            <BsChat />
          </motion.h3>
        </div>
        <div className="mb-6">
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {reviews}
          </p>
        </div>
      </motion.div>
    );
};

export default ClientCart;