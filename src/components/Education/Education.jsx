import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development.
          Here are the details of my academic background.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">

        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Education Items */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex items-center mb-16 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 bg-gray-400 border-4 border-[#8245ec] rounded-full flex items-center justify-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Card */}
            <div
              className={`w-[45%] bg-gray-900 border border-white rounded-2xl p-6 shadow-lg shadow-purple-500/20 transform transition duration-300 hover:scale-105 ${
                index % 2 === 0 ? "mr-auto pr-10" : "ml-auto pl-10"
              }`}
            >
              <div className="flex items-center gap-4">
                {/* School Logo */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Info */}
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-gray-300">
                    {edu.school}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {edu.date}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-400 font-semibold">
                Grade: {edu.grade}
              </p>

              <p className="mt-2 text-gray-400 text-sm">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;