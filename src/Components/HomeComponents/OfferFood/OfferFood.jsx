import burger from "../../../assets/images/DOUBLE MAC BURGER.png";
import coke from "../../../assets/images/COLA.png";
import { motion } from "framer-motion";

const OfferFood = () => {
  return (
    <>
      <hr className="my-16 border-gray-700 border-[1px]" />

      {/* Offer Card 1 */}
      <div className="flex flex-col md:flex-row gap-10 text-white">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex flex-col-reverse lg:flex-row lg:justify-between rounded-lg bg-neutral-800 p-5"
        >
          <div>
            <h3 className="text-[#FF9D00]">Payday Promo</h3>
            <h3 className="text-3xl font-semibold uppercase font-oswald">
              Get a 10% discount on payday week
            </h3>
            <p className="text-gray-300 my-2 max-w-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              perferendis.
            </p>
            <button className="text-[#FF9D00]">Buy Online</button>
          </div>
          <img
            src={burger}
            alt="burger"
            className="w-[200px] h-[200px] mx-auto"
          />
        </motion.div>

        {/* Offer Card 2 */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex flex-col-reverse lg:flex-row lg:justify-between rounded-lg bg-neutral-800 p-5"
        >
          <div>
            <h3 className="text-[#FF9D00]">Payday Promo</h3>
            <h3 className="text-3xl font-semibold uppercase font-oswald">
              Buy one coke get more free 1 coke
            </h3>
            <p className="text-gray-300 my-2 max-w-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              perferendis.
            </p>
            <button className="text-[#FF9D00]">Buy Online</button>
          </div>
          <img src={coke} alt="coke" className="w-[200px] h-[200px] mx-auto" />
        </motion.div>
      </div>
    </>
  );
};

export default OfferFood;
