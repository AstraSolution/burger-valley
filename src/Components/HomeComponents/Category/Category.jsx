import { useQuery } from "@tanstack/react-query";
import UseAxios from "../../../Hooks/useAxios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Category = () => {
  const axios = UseAxios();

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get("/api/v1/category");
      return res.data.data;
    },
  });

  return (
    <>
      <hr className="mb-16 border-gray-700 border-[1px]" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-white">
        {categories.map((category) => (
          <motion.div
            key={category._id}
            whileHover={{ scale: 1.1 }}
            className="flex items-center rounded-lg hover:shadow-white shadow-[10px_10px_10px_-7px_rgba(0,0,0,0.3)]"
            style={{ backgroundColor: `${category?.bgColorCode}` }}
          >
            <div className="w-[40%]">
              <img
                src={category?.categoryImage}
                alt={category?.categoryName}
                className="w-[120px] h-[120px]"
              />
            </div>
            <div className="w-[60%]">
              <h3 className="text-xl font-bold uppercase font-oswald">
                {category?.categoryName}
              </h3>
              <h3 className="mb-2 text-xs">{category?.categoryDescription}</h3>
              <Link
                to="/all-foods"
                state={`${category?.categoryName}`}
                style={{ color: `${category?.linkColorCode}` }}
              >
                Buy Online
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Category;
