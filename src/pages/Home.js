import React from 'react';
import Banner from '../Components/Banner';
import Contact from '../Components/Contact';
import Portfolio from '../Components/Portfolio';
import Skills from '../Components/Skills';

const Home = () => {
    return (
        <div>
            <Banner />
            <Skills />
            <Portfolio />
            <Contact />
        </div>
    );
};

export default Home;