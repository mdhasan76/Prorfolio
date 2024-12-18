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
    <div className="space-y-5">
      {/* MindQuest Studio Section */}
      <div className="bg-gradient-to-bl to-gray-200 from-white shadow-xl rounded-lg">
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-1">
            Junior Developer (Backend)
          </h3>
          <div className="flex justify-between items-center text-gray-700 mb-3">
            <p className="text-md font-medium">MindQuest Studio</p>
            <span className="text-sm font-light">
              April 2023 - December 2024
            </span>
          </div>
          <div className="space-y-4 text-gray-600 text-lg">
            <p>
              At MindQuest Studio, I played a key role in the development of a
              large-scale ERP software and an E-Commerce platform. The ERP
              project featured over 60 database collections, where I
              successfully designed and implemented 500+ RESTful APIs using
              Node.js, Express.js, and MongoDB with TypeScript. Additionally, I
              wrote advanced MongoDB aggregation pipelines to power complex
              dashboards, ensuring insightful and efficient data visualization.
            </p>
            <p>
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

      {/* BongoDemy Section */}
      <div className="bg-gradient-to-bl to-gray-200 from-white shadow-xl rounded-lg">
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-1">Web Developer</h3>
          <div className="flex justify-between items-center text-gray-700 mb-3">
            <p className="text-md font-medium">BongoDemy</p>
            <span className="text-sm font-light">February - March 2023</span>
          </div>
          <div className="text-gray-600 text-lg">
            <p>
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

// export default ResumeTabSection;

// py-5 px-5 hover:bg-gradient-shadow-rounded hover:bg-1 hover:custom-shadow-1 hover:text-[#ff014f] duration-300 hover:border-solid hover:border-green-300 hover:rounded-2 hover:shadow-sm  text-lg outline-none bg-transparent rounded-lg font-medium block
