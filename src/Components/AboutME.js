import React from 'react';
import img from '../assets/my-pic2.jpg';
import { FiFacebook, FiLinkedin } from 'react-icons/fi';

const AboutME = () => {
    return (
        <div id="skills" className='my-10 border-b-2 p-5 sm:p-10'>
            <h1 className='text-5xl font-bold text-center mb-20'>About Me</h1>
            <div className='grid grid-cols-2 items-center'>
                <div>
                    <img src={img} className='border-[7px] mx-auto border-white' alt="" />
                </div>
                <div className='text-lg font-medium p-2 text-gray-600  leading-8'>
                    <p className='mb-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatum illum cupiditate rerum provident, ducimus totam quas iste earum beatae veniam dolorum sapiente repellat. Officia quibusdam voluptatum vel ullam maxime?</p>
                    <p className='mb-2'>Phone: 01952532239</p>
                    <p>Email: mdhasanmiah8064@gmail.com</p>
                    <p className="mt-5 mb-2">FIND WITH ME</p>
                    <div className="flex">
                        <a href="https://www.linkedin.com/in/md-hasan-miah/" target="_blank" className='bg-my rounded-md shadow-3xl p-5 duration-300 hover:-translate-y-1 hover:bg-[#ff014f] hover:text-white mr-2' rel="noreferrer"><FiLinkedin className='text-lg' /></a>
                        <a href="https://www.facebook.com/MDHMMMMMM" target="_blank" rel="noreferrer" className='bg-my rounded-md shadow-3xl p-5 duration-300 hover:-translate-y-1 hover:bg-[#ff014f] hover:text-white mr-2'><FiFacebook className='text-lg' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutME;