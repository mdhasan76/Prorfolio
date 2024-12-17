import React from "react";
import img from "../assets/my-pic2.jpg";
import { FiFacebook, FiLinkedin } from "react-icons/fi";

const AboutME = () => {
  return (
    <div id="about-me" className="my-10 border-b-2 p-5 sm:p-10">
      <h1 className="text-5xl font-bold text-center mb-20">About Me</h1>
      <div className="grid md:grid-cols-2 items-center">
        <div>
          <img src={img} className="border-[7px] mx-auto border-white" alt="" />
        </div>
        <div className="text-lg font-medium p-2 text-gray-600  ">
          <p className="mb-2 text-justify">
            <span className="">
              I am Md Hasan Mia, a dedicated and professional Full-Stack
              Developer with two years of experience specializing in backend
              development using MongoDB, Node.js, and the MERN stack. I have a
              strong focus on ERP and E-Commerce solutions, creating efficient,
              scalable, and user-friendly applications tailored to business
              needs.
            </span>
            <span className="my-1 block">
              On the front end, I excel at building seamless and responsive
              interfaces using React.js, while on the back end, I ensure robust
              and well-architected systems. I am continuously expanding my
              knowledge in web development through self-learning and practical
              projects.
            </span>
            <span className="block mb-1">
              My ultimate goal is to become a highly skilled full-stack
              developer capable of building intuitive user interfaces and
              managing complex back-end systems with efficiency. I am also
              exploring new technologies like Go (Golang) And System Design to
              further enhance my expertise and stay ahead in the field.
            </span>
          </p>
          <div className="mt-1">
            <p className="mb-2">Phone: 01952532239</p>
            <p>Email: mdhasanmiah8064@gmail.com</p>
          </div>
          <p className="mt-5 mb-2">FIND WITH ME</p>
          <div className="flex justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/md-hasan-miah/"
              target="_blank"
              className="bg-my rounded-md shadow-3xl p-5 duration-300 hover:-translate-y-1 hover:bg-[#ff014f] hover:text-white mr-2"
              rel="noreferrer"
            >
              <FiLinkedin className="text-lg" />
            </a>
            <a
              href="https://www.facebook.com/DeveloperMdHasan"
              target="_blank"
              rel="noreferrer"
              className="bg-my rounded-md shadow-3xl p-5 duration-300 hover:-translate-y-1 hover:bg-[#ff014f] hover:text-white mr-2"
            >
              <FiFacebook className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutME;
