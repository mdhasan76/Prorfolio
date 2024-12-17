import React from "react";

const ResumeSection = () => {
  return (
    <div>
      <div className="text-center">
        <p className="primary-text-color leading-[14px] font-medium">
          2+ Years of Experience
        </p>
        <h1 className="text-5xl font-bold text-center mb-20 mt-4">
          My Experience
        </h1>
      </div>
      <ResumeTabSection />
      <div className="h-[2px] bg-gray-200 my-16"></div>
    </div>
  );
};
export default ResumeSection;

const ResumeTabSection = () => {
  return (
    <div>
      <div className="bg-gradient-to-bl to-[#e2e8ec] from-[#ffffff] shadow-3xl rounded-lg">
        <div className="p-5">
          <div>
            <p className="text-xl font-bold mb-1">Junior Developer (Backend)</p>
            <h2 className="mb-3 text-md font-medium">
              MindQuest Studio |
              <span className="text-sm font-thin ml-5">
                April 2023- December 2024
              </span>
            </h2>
            <p className="text-justify text-lg font-medium pt-2  text-gray-600 ">
              At MindQuest Studio, I played a key role in the development of a
              large-scale ERP software and an E-Commerce platform. The ERP
              project featured over 60 database collections, where I
              successfully designed and implemented 500+ RESTful APIs using
              Node.js, Express.js, and MongoDB with TypeScript. Additionally, I
              wrote advanced MongoDB aggregation pipelines to power complex
              dashboards, ensuring insightful and efficient data visualization.
            </p>
            <p className="text-justify text-lg font-medium pt-2 text-gray-600">
              In my first three months, I contributed to the frontend, utilizing
              technologies such as React.js, Next.js, Redux, and Rechart, before
              transitioning to backend development. I collaborated closely with
              cross-functional teams to deliver high-quality solutions, focusing
              on robust error handling, application stability, and optimized
              performance. My backend expertise also extended to the E-Commerce
              project, where I built reliable and scalable solutions to meet
              client requirements.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-bl to-[#e2e8ec] from-[#ffffff] shadow-3xl rounded-lg mt-5">
        <div className="p-5">
          <div>
            <p className="text-xl font-bold mb-1">Web Developer</p>
            <h2 className="mb-3 text-md font-medium">
              BongoDemy |
              <span className="text-sm font-thin ml-5">
                February - March 2023
              </span>
            </h2>
            <p className="text-justify text-lg font-medium pt-2  text-gray-600 ">
              Converted Figma designs into responsive and pixel-perfect React.js
              user interfaces. Collaborated with the team to ensure clean,
              maintainable code and adherence to industry standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// py-5 px-5 hover:bg-gradient-shadow-rounded hover:bg-1 hover:custom-shadow-1 hover:text-[#ff014f] duration-300 hover:border-solid hover:border-green-300 hover:rounded-2 hover:shadow-sm  text-lg outline-none bg-transparent rounded-lg font-medium block
