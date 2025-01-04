import React from 'react';
import { FaPlay } from 'react-icons/fa';
import img from '../../assets/images/img.avif';
import { motion } from 'framer-motion';
import { SlideRight } from '/src/components/utility/animation';

const Hero = () => {
    return (
        <>
            <section>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 min-h-[650px]">
                    {/* Brand info */}
                    <div className="flex flex-col justify-center py-10 md:py-0 font-playfair">
                        <div className="text-center md:text-left space-x-6">
                            <motion.h1
                                variants={SlideRight(0.8)}
                                initial="hidden"
                                animate="visible"
                                className="text-5xl mx-auto font-bold"
                            >
                                Gym Gives You the Perfect{' '}
                                <span className="text-primary">Health</span>
                            </motion.h1>
                            <motion.p
                                variants={SlideRight(1.3)}
                                initial="hidden"
                                animate="visible"
                                className="text-gray-600 text-2xl py-5"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </motion.p>

                            {/* Button Section */}
                            <motion.div
                                variants={SlideRight(1.8)}
                                initial="hidden"
                                animate="visible"
                                className="flex justify-center gap-8 md:justify-start mt-8"
                            >
                                <button className="primary-btn flex items-center gap-2 mt-4">
                                    Order Now
                                </button>
                                <button className="flex justify-center items-center gap-2 mt-4">
                                    <FaPlay />
                                    Watch Now
                                </button>
                            </motion.div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center items-center gap-10">
                        <motion.img
                            src={img}
                            alt="Gym"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="w-[350px] md:w-[550px] xl:w-[700px] drop-shadow"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
