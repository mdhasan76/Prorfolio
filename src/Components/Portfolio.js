import React from 'react';
import mobile from '../assets/mobile.jfif';
import { FiArrowUpRight } from 'react-icons/fi'
const portfolioData = [
    {
        name: "MobileLy",
        text: "Second-hand Phone Selling E-commerce site",
        img: mobile,
    },
    {
        name: "Safe Edu",
        text: "Course Selling Site",
        img: mobile,
    },
    {
        name: "Crazy Travel",
        text: "Travel Service selling site",
        img: mobile,
    },
]
const Portfolio = () => {
    return (
        <div className='my-10 p-5 sm:p-10'>
            <h1 className='text-5xl font-bold text-center mb-20'>Recent Project</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    portfolioData.map((data, i) =>
                        <a href="/" key={i} className='p-6 bg-gradient-to-t to-[#e2e8ec] from-[#ffffff] card-div shadow-3xl rounded-lg'>
                            <div className='flex items-center justify-between'>
                                <div className='mb-3'>
                                    <h4 className='text-3xl pb-2 font-semibold'>{data.name}</h4>
                                    <p>{data.text}</p>
                                </div>
                                <span className='p-3'> <FiArrowUpRight className='text-3xl rounded-full bg-black text-white card-icon' /> </span>
                            </div>
                            <div>
                                <img src={data.img} className="w-full h-64 rounded-lg" alt="" />
                            </div>
                        </a>)
                }
            </div>
        </div>
    );
};

export default Portfolio;