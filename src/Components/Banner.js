import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-[90vh]
        bg-[url('/src/assets/my-pic2.jpg')] 
        text-center text-white ">
            <div className="hero-overlay bg-opacity-60"></div>
            <div>
                <h1 className='text-7xl font-bold leading-normal'>MD HASAN MIAH</h1>
                <p className='text-3xl mb-3'>I am a <span className='text-[#ff014f]'> Front End Developer.</span></p>
                <a href='#contact' className='text-[#ff014f] p-3 bg-white rounded text-lg font-medium '>Contact Me</a>
            </div>
        </div>
    );
};

export default Banner;