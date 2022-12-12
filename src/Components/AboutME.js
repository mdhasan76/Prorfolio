import React from 'react';
import img from '../assets/my-pic2.jpg';
import { FiFacebook, FiLinkedin } from 'react-icons/fi';

const AboutME = () => {
    return (
        <div id="about-me" className='my-10 border-b-2 p-5 sm:p-10'>
            <h1 className='text-5xl font-bold text-center mb-20'>About Me</h1>
            <div className='grid md:grid-cols-2 items-center'>
                <div>
                    <img src={img} className='border-[7px] mx-auto border-white' alt="" />
                </div>
                <div className='text-lg font-medium p-2 text-gray-600  leading-8 text-center md:text-left'>
                    <p className='mb-2'>I am Md Hasan Miah. I am a Professional front End developer Based on React.js.I gather knowledge in various parts of web development by myself. My ultimate goal is to become an awesome full-stack web developer who can make beautiful UIs and also can handle the back-end smoothly. </p>
                    <div className='mt-1'>
                        <p className='mb-2'>Phone: 01952532239</p>
                        <p>Email: mdhasanmiah8064@gmail.com</p>
                    </div>
                    <p className="mt-5 mb-2">FIND WITH ME</p>
                    <div className="flex justify-center md:justify-start">
                        <a href="https://www.linkedin.com/in/md-hasan-miah/" target="_blank" className='bg-my rounded-md shadow-3xl p-5 duration-300 hover:-translate-y-1 hover:bg-[#ff014f] hover:text-white mr-2' rel="noreferrer"><FiLinkedin className='text-lg' /></a>
                        <a href="https://www.facebook.com/MDHMMMMMM" target="_blank" rel="noreferrer" className='bg-my rounded-md shadow-3xl p-5 duration-300 hover:-translate-y-1 hover:bg-[#ff014f] hover:text-white mr-2'><FiFacebook className='text-lg' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutME;