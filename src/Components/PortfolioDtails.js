import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'

const PortfolioDtails = () => {
    const [detail, setDetails] = useState({});
    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://crazy-travle-server.vercel.app/portfolio/${id}`)
            .then(res => {
                setDetails(res.data)
            })
    }, [id])
    return (
        <div className='grid gap-5 bg-white md:grid-cols-2'>
            <div className='order-2 md:order-1 [&_img]:border-b-2 '>
                {
                    detail.pageImg?.map((img, i) => <img key={i} src={img} alt="" />)
                }
            </div><div className='relative p-3 order-1 md:order-2'>
                <h4 className='font-semibold text-4xl mt-3 mb-2'>{detail.name}<span className='text-sm'></span> </h4>
                <p className='text-lg text-gray-600'>{detail.text}</p>

                <div>
                    <p className='py-2'>Uses Technology: <strong>{detail.technology}</strong> etc...</p>
                    <p className='my-2 text-lg font-semibold'>Feature:</p>
                    <ul className='[&>li]:text-lg [&>li]:mb-2  list-disc list-inside p-3'>
                        {
                            detail.feature?.map((item, i) => <li key={i}>{item}</li>)
                        }
                    </ul>
                    <a href={detail.clientsideGit}
                        target="_blank"
                        rel="noreferrer" className='btn btn-primary mr-3'>Client side</a>
                    {
                        detail.serversideGit != null ?
                            <a href={detail.serversideGit}
                                target="_blank"
                                rel="noreferrer"
                                className='btn btn-primary '>Server side</a> : ''
                    }
                </div>
            </div>
        </div >
    );
};

export default PortfolioDtails;