import React from 'react';
import Typewriter from 'typewriter-effect';

import WaterWave from 'react-water-wave';
import image from '../assets/IMG20210515175953-01.jpeg';
const Banner = () => {
    return (
        <WaterWave
            className="h-[90vh] bg-contain"
            imageUrl={image}
        >
            {
                () => (
                    <div className=" hero text-center text-white h-full">
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div>
                            <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold leading-normal'>MD HASAN MIA</h1>
                            <p className='text-2xl md:text-3xl mb-3 font-semibold'>I am a <span className='text-[#ff014f]'>
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
                )
            }
        </WaterWave>
    );
};

export default Banner;