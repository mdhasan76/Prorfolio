import React from 'react';
import bootstrap from '../assets/Bootstrap_logo.png';
import css from '../assets/css3-logo.png';
import tailwind from '../assets/Tailwind_CSS_Logo.png';
import javascript from '../assets/JavaScript-logo.png';
import metarialUI from '../assets/metarial-ui-logo.png';
import react from '../assets/React-logo.png';
import firebase from '../assets/firebase-logo.png';
import mongoDB from '../assets/mongoDB-logo.png';
import node from '../assets/node.js-logo.png';
import html from '../assets/html-logo.jpg';
import express from '../assets/express-logo.jpg';

const frontEnd = [
    
    {
        img: html,
        name: "HTML5"
    },
    {
        img: css,
        name: "CSS3"
    },
    {
        img: javascript,
        name: "JavaScript"
    },
    {
        img: react,
        name: "React"
    },
    {
        img: bootstrap,
        name: "Bootstrap"
    },
    {
        img: tailwind,
        name: "Tailwind"
    },
    {
        img: metarialUI,
        name: "Metariul UI"
    },
];
const backEnd = [
   
    {
        img: node,
        name: "Node.js"
    },
    {
        img: express,
        name: "Express.js"
    },
    {
        img: mongoDB,
        name: "MongoDB"
    },
    {
        img: firebase,
        name: "Firebase"
    }
];

const Skills = () => {
    return (
        <div id="skills" className='my-10 border-b-2 p-5 sm:p-10'>
            <h1 className='text-5xl font-bold text-center mb-20'>My Skills</h1>
            <div>
                <p className='text-center text-lg font-medium'>Front-End Skills</p>
                <div className='flex flex-wrap justify-center my-5'>
                    {
                        frontEnd.map((data, i) => <div key={i}>
                            <div className='bg-white w-28 p-3 mb-2 rounded-md mr-2'>
                                <span className=''> <img src={data.img} className='w-full h-16 mx-auto' alt="" /></span>
                                <p className='pt-2 font-medium text-center'>{data.name}</p>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
            <div>
                <p className='text-center text-lg font-medium'>Back-End Skills</p>
                <div className='flex flex-wrap justify-center my-5'>
                    {
                        backEnd.map((data, i) => <div key={i}>
                            <div className='bg-white w-28 mb-2 p-3 rounded-md mr-2'>
                                <span className=''> <img src={data.img} className='w-full h-16 mx-auto' alt="" /></span>
                                <p className='pt-2 font-medium text-center'>{data.name}</p>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;