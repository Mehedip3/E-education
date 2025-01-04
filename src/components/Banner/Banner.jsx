import React from 'react';
import cov4 from '/src/assets/images/cov4.jpg';

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
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
                {/* Banner Image */}
                <div>
                    <img src={cov4} alt="Banner" />
                </div>

                {/* Banner Info */}
                <div className="flex flex-col justify-center text-center md:text-left space-y-4">
                    <p className="text-2xl lg:text-4xl font-bold capitalize font-playfair">
                        {BannerData.title}
                    </p>
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
