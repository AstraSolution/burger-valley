import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useAllMenus from "../../Hooks/useAllMenus";
import MenuCard from "./MenuCard";
import { useLocation } from "react-router-dom";

const OfferMenu = () => {
  const [allMenuData] = useAllMenus();
  let [activeTab, setActiveTab] = useState();

  // console.log(allMenuData);

  let { state } = useLocation();

  let tabs = [
    { id: "burger", label: "Food" },
    { id: "snack", label: "Snack" },
    { id: "beverage", label: "Beverage" },
  ];

  useEffect(() => {
    if (state === null) {
      setActiveTab(tabs[0]?.id);
    } else {
      setActiveTab(state.toLowerCase());
    }
  }, []);

  // console.log(activeTab);

  const CurrentTab = allMenuData?.filter(
    (food) => food?.category === activeTab
  );

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="flex space-x-1 mb-2">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => {
              setActiveTab(tab?.id);
            }}
            className={`${activeTab === tab?.id ? "" : ""}
                                relative rounded-xl px-4 bg-[#171717]  py-3 text-base font-medium  transition text-white focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab?.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10  bg-yellow-500 mix-blend-hard-light"
                style={{ borderRadius: 9 }}
                transition={{ type: "spring", bounce: -10, duration: 0.6 }}
              />
            )}
            {tab?.label}
          </button>
        ))}{" "}
      </div>
      <div className="container grid grid-cols-1 mt-3 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {CurrentTab?.map((food) => (
          <MenuCard key={food._id} food={food}></MenuCard>
        ))}
      </div>
    </div>
  );
};

export default OfferMenu;
