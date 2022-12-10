import React from 'react';
import myimg from '../assets/my-pic2.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-[90vh] bg-base-200">
            <div className="flex flex-col lg:flex-row-reverse  max-w-6xl mx-auto">
                <div className="text-center lg:text-left p-5 w-[70%]">
                    <h1 className="text-5xl font-bold">Hello! I am Md Hasan <br /> a <span className='text-4xl text-indigo-400'>Front End Developer</span> </h1>
                    <p className='py-3 text-lg font-medium'>I am a web developer with an amazing ability to develop websites that are both functional and aesthetically pleasing. I have a strong under-standing of web standards and best practices, and I am passionate about creating websites that users will find easy to use and visually appealing.</p>
                </div>
                <div className='w-[30%]'>
                    <img src={myimg} className="rounded-lg ring-4 w-full" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;