import React from 'react';
import { FiFacebook, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="footer footer-center border-t-2 mt-10 p-10 text-base-content rounded">
            <div>
                <h5 className='text-lg font-medium text-center mb-5'>Find With Me</h5>
                <div className="grid grid-flow-col gap-4">
                    <a href="/" className='bg-my rounded-md shadow-3xl p-5 duration-300 hover:-translate-y-1 hover:bg-[#ff014f] hover:text-white'><FiLinkedin className='text-lg' /></a>
                    <a href="/" className='bg-my rounded-md shadow-3xl p-5 duration-300 hover:-translate-y-1 hover:bg-[#ff014f] hover:text-white'><FiFacebook className='text-lg' /></a>
                </div>
            </div>
            <div>
                <p className='text-lg'>Copyright © 2022 - All right reserved by Md Hasan</p>
            </div>
        </footer>
    );
};

export default Footer;