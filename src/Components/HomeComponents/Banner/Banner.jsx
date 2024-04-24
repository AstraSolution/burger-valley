import banner_image from "../../../assets/images/banner_item.png";
import { MdRestaurant, MdWaterDrop } from "react-icons/md";
import { IoIosLeaf } from "react-icons/io";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="flex flex-col gap-10 md:flex-row min-h-screen items-center text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full md:w-1/2"
      >
        <img
          src={banner_image}
          alt="banner"
          className="max-w-xs lg:max-w-sm mx-auto h-full"
        />
      </motion.div>
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold uppercase font-oswald">
          Happy tummy with testy burgers.
        </h2>
        <hr className={`border-[#FF9D00] rounded-lg w-28 border-2 my-5`} />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati,
          numquam placeat? Sapiente sunt doloremque illo corporis perspiciatis
          ea nobis provident nihil delectus tempora. Recusandae in eum quod unde
          fuga, velit enim repudiandae voluptatum illo, excepturi inventore
        </p>
        <div className="my-5 lg:my-10 flex gap-10">
          <div className="flex flex-col items-center">
            <p className="text-3xl text-[#FF9D00]">
              <MdRestaurant />
            </p>
            <h3 className="font-medium">Delicious</h3>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl text-[#FF9D00]">
              <MdWaterDrop />
            </p>
            <h3 className="font-medium">Fresh</h3>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl text-[#FF9D00]">
              <IoIosLeaf />
            </p>
            <h3 className="font-medium">Organic</h3>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#FF9D00] text-black px-5 py-2 rounded-sm font-semibold"
        >
          Learn More
        </motion.button>
      </div>
    </div>
  );
};

export default Banner;
