import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom';
const portfolioData = [
    {
        id: 1,
        name: "MobileLy",
        text: "Second-hand Phone Selling E-commerce site",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToPB47Kg2xhUMN_RpDXFtHKT9RglF68TdwPg&usqp=CAU",
        siteLink: "https://mobilly76.web.app/"
    },
    {
        id: 3,
        name: "Safe Edu",
        text: "Course Selling Site",
        img: "https://leadership.ng/wp-content/uploads/2022/07/Education-1280x720-1.jpg",
        siteLink: "https://safe-edu1.web.app/"
    },
    {
        id: 2,
        name: "Crazy Travel",
        text: "Travel Service selling site",
        img: "https://img.freepik.com/free-photo/travel-concept-with-landmarks_23-2149153256.jpg?w=2000",
        siteLink: "https://crazy-travel.web.app/"
    },
    {
        id: 4,
        name: "Unani Oushudhaloy",
        text: "Make Invoice Memo by user input",
        img: "https://thebusinesscommunication.com/wp-content/uploads/2019/09/Importance-of-Memo-1.jpg",
        siteLink: "https://unanioushudhaloy.netlify.app/"
    },
    // {
    //     name: "Unani Oushudhaloy",
    //     clientsideGit: "https://github.com/mdhasan76/Prorfolio",
    //     feature: ["User can add product", "User can download Order pdf", "user Will show total price of This order", "The PDF will download as BIll to name", "user can give discount amount for Client"],
    //     serversideGit: "",
    //     pageImg: ["https://i.ibb.co/zr8RG6C/mobilly76-web-app.png",
    //         "https://i.ibb.co/85Jq0S4/mobilly76-web-app-1.png",
    //         "https://i.ibb.co/xfcd93c/mobilly76-web-app-2.png"],
    //     serversideGit: "",
    //     siteId: 4,
    //     siteLink: "https://mdhasan-portfolio.netlify.app/",
    //     technology: "React, React Pdf, Tailwind, Flowbite",
    //     text: "Second-hand Phone Selling E-commerce site",
    // }
]
const Portfolio = () => {
    return (
        <div id="portfolio" className='my-10 p-5 border-b-2 sm:p-10'>
            <h1 className='text-5xl font-bold text-center mb-20'>Recent Project</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    portfolioData.map((data, i) =>
                        <a href={data.siteLink} key={i} className='p-6 bg-gradient-to-t  to-[#e2e8ec] from-[#ffffff] card-div shadow-3xl rounded-lg' target="_blank" rel="noreferrer">
                            <div className='flex items-center justify-between'>
                                <div className='mb-3'>
                                    <h4 className='text-3xl pb-2 font-semibold'>{data.name}</h4>
                                    <p>{data.text}</p>
                                </div>
                                <span className='p-3'> <FiArrowUpRight className='text-3xl rounded-full bg-black text-white card-icon' /> </span>
                            </div>
                            <div>
                                <img src={data.img} className="w-full h-64 rounded-lg" alt="" />
                            </div>
                            <div className='text-right  mt-2'>
                                <Link to={`/portfolio/${data.id}`} className="btn btn-primary">See Dtails</Link>
                            </div>
                        </a>)
                }
            </div>
        </div>
    );
};

export default Portfolio;