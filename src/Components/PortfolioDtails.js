import React, { useEffect } from 'react';
import axios from 'axios';
import img1 from '../assets/dtails/crazy-travel.web.app_.png'
import img2 from '../assets/dtails/crazy-travel.web.app_ (1).png'
import img3 from '../assets/dtails/crazy-travel.web.app_ (2).png'

const PortfolioDtails = () => {
    // const data = useLoaderData();
    // const { name } = useParams();
    useEffect(() => {
        axios.get(`/portfolioDetails.json`)
            .then(res => {
                console.log(res.data)
            })
    }, [])
    return (
        <div className='grid gap-5 bg-white md:grid-cols-2'>
            <div className='order-2 md:order-1 [&_img]:border-b-2 '>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
            <div className='relative p-3 order-1 md:order-2'>
                <h4 className='font-semibold text-4xl mt-3 mb-2'>MobilLY <span className='text-sm'>(full-stack)</span> </h4>
                <p className='text-lg text-gray-600'>The second Hand product Selling E-commerce site</p>

                <div>
                    <p className='py-2'>Uses Technology: <strong>React, react router, MongoDB, firebase Authentication, React Query, node.js, express.js, Tailwind, daisyUI, jwt token, react icon</strong> etc...</p>
                    <p className='my-2 text-lg font-semibold'>Feature:</p>
                    <ul className='[&>li]:text-lg [&>li]:mb-2  list-disc list-inside p-3'>
                        <li>This is A Travel service Selling & review site. A single pesone Sale his Travel related service .</li>
                        <li>This site have 2 role. User role and Seller role</li>
                        <li>A user can see service. and give feedback or Review for service.</li>
                        <li>This site has service Dtails route.</li>
                        <li>In this site Has Log in authontication and sing Up page.</li>
                        <li>It has been Private route. For given a service review must have login user.</li>
                        <li>It has a Blog page . where has 4 question Ans.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDtails;