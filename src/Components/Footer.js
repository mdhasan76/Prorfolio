import React from 'react';
import { BsLinkedin } from "react-icons/bs"

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href="/">
                        <BsLinkedin />
                    </a>
                </div>
            </div>
            <div>
                <p>Copyright © 2022 - All right reserved by Md Hasan</p>
            </div>
        </footer>
    );
};

export default Footer;