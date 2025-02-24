import React, { useState } from "react";
import { ProductsData } from "../mockData/Data";
import { motion } from "framer-motion";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Yoga", "Fitness", "Musels"];

  const filteredCards =
    activeTab === "All"
      ? ProductsData
      : ProductsData.filter((card) => card.category === activeTab);

  return (
    <>
      <div className="container my-12 md:my-16">
        <div className="flex space-x-4 mb-4 p-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 rounded ${
                activeTab === tab
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Display Filtered Products */}
        {/* <div className="grid grid-cols-3 gap-4">
          {filteredCards.map((card) => (
            <motion.div
              key={card.id}
              className="p-4 border rounded shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg font-semibold">{card.name}</h3>
              <p>{card.category}</p>
            </motion.div>
          ))}
        </div> */}


      </div>
    </>
  );
};

export default Tab;
