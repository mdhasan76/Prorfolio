import React from 'react';
import AboutME from '../Components/AboutME';
import Banner from '../Components/Banner';
import Contact from '../Components/Contact';
import Portfolio from '../Components/Portfolio';
import Skills from '../Components/Skills';

const Home = () => {
    return (
        <div>
            <Banner />
            <Skills />
            <AboutME />
            <Portfolio />
            <Contact />
        </div>
    );
};

export default Home;