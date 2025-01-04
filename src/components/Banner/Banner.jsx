import React from 'react';
import cov4 from '/src/assets/images/cov4.jpg';
import { motion } from 'framer-motion';
import { Slideup } from '/src/components/utility/animation.jsx';

const Banner = ({ title, subtitle, link }) => {
    // Use passed props or default values
    const BannerData = {
        title: title || "The importance of Taking Care of Yourself",
        subtitle:
            subtitle ||
            "The importance of taking care of yourself cannot be overstated. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laudantium nisi hic, ut dolore pariatur delectus in itaque quibusdam, dolores quas. Maiores quo deleniti perferendis amet molestias, eum numquam sint?",
        link: link || "#",
    };

    return (
        <div className="container mx-auto">
            <div className="bg-[#f9f9f9] grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
                {/* Banner Image */}
                <div>
                    <motion.img
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                        src={cov4}
                        alt="Banner"
                        className="w-[300px] md:max-w-[400px] xl:max-w-[600px] h-auto object-cover"
                    />
                </div>

                {/* Banner Info */}
                <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
                    <motion.p
                        variants={Slideup (0.5)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-2xl lg:text-4xl font-bold capitalize font-playfair"
                    >
                        {BannerData.title}
                    </motion.p>
                    <p>{BannerData.subtitle}</p>
                    <div className="flex justify-center md:justify-start">
                        <a href={BannerData.link}>
                            <button className="primary-btn">Explore More</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
