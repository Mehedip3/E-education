
import { motion } from 'framer-motion';
import React from 'react';
import { GrYoga } from "react-icons/gr";
import { SlideRight } from '/src/components/utility/animation.jsx';

const EquipmentData = [
    {
        id: 1,
        title: "Yoga Equipments",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        icon: <GrYoga />,
        delay: 0.3,
    },
    {
        id: 2,
        title: "Meditation Mats",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        icon: <GrYoga />,
        delay: 0.6,
    },
    {
        id: 3,
        title: "Stretch Bands",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        icon: <GrYoga />,
        delay: 0.9,
    },
];

const Equipments = () => {
    return (
        <div>
            <div className="container mx-auto py-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
                    <div className="space-y-4 p-6">
                        <h1 className="text-3xl md:text-4xl font-bold">What We Offer for You</h1>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    {EquipmentData.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={SlideRight(item.delay || 0)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-4 p-6 bg-[#fbfbfb] hover:bg-white rounded-xl hover:shadow-[0_0_22px_0 rgba(0,0,0,0.15)]"
                        >
                            <div className="text-3xl">{item.icon}</div>
                            <p className="text-2xl font-semibold">{item.title}</p>
                            <p className="text-gray-500">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Equipments;
