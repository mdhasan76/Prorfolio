import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="navbar sticky top-0 z-10 bg-base-100 justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href='/#about-me' className='font-semibold'>About Me</a></li>
                        <li><a href='/#contact' className='font-semibold'>Contact</a></li>
                        <li><a href='/#portfolio' className='font-semibold'>Portfolio</a></li>
                        <li><Link to='/blog' className='font-semibold'>Blog</Link></li>
                        <li><a href='https://drive.google.com/file/d/1LUgDVFSwi3VZEF3SR4kmNxoOvMPRbydm/view?usp=share_link' target='_blank' rel="noreferrer" className='font-semibold'>My Resume</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl" href='/'>Md Hasan</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href='/#about-me' className='font-semibold'>About Me</a></li>
                    <li><a href='/#contact' className='font-semibold'>Contact</a></li>
                    <li><a href='/#portfolio' className='font-semibold'>Portfolio</a></li>
                    <li><a href='/blog' className='font-semibold'>Blog</a></li>
                    <li><a href='https://drive.google.com/file/d/1LUgDVFSwi3VZEF3SR4kmNxoOvMPRbydm/view?usp=share_link' target='_blank' rel="noreferrer" className='font-semibold'>My Resume</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;