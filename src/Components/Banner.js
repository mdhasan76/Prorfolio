import React from 'react';
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div className="hero min-h-[90vh]
        bg-[url('/src/assets/IMG20210515175953-01.jpeg')] 
        text-center text-white ">
            <div className="hero-overlay bg-opacity-80"></div>
            <div>
                <h1 className='text-7xl font-bold leading-normal'>MD HASAN MIA</h1>
                <p className='text-3xl mb-3 font-semibold'>I am a <span className='text-[#ff014f]'>
                    <Typewriter
                        options={{
                            strings: ["Front End Developer", "React Developer", "Full Stact Developer"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </span></p>
                <a href='#contact' className='text-[#ff014f] p-3 bg-white rounded text-lg font-medium mt-4 inline-block'>Contact Me</a>
            </div>
        </div>
    );
};

export default Banner;