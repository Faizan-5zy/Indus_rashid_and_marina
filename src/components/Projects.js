import React, { useState } from "react";
import { PROJECTS } from "../utils.js/constants";
import { ReactTyped as Typed } from "react-typed";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const featuredProjects = PROJECTS;

  return (
    <section
      id="projects"
      className="relative project-showcase bg-none pt-24"
      style={{
        backgroundImage: `url('https://i.1.creatium.io/9f/f0/ed/97dcb75eb1c6eb2601b4faa5f4483abe9e/3038x1405q5/emaar_mina_rashid_apartments_photos_10.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white pb-12 pt-0 mb-12 h-auto">
        <h2 className="text-4xl font-bold mb-16">
          <Typed
            strings={[
              "Discover Exclusive Properties in Rashid Yachts and Marina",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop={true}
          />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-16 pt-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`relative text-gray-500 bg-white p-6 rounded-lg shadow-lg transition-transform transform ${
                activeProject === index
                  ? "scale-105 z-30"
                  : "hover:scale-105 z-10"
              }`}
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
              <p className="text-sm">{project.bedrooms}</p>

              {activeProject === index && (
                <div className="absolute inset-0 text-gray-500 bg-white  rounded-lg z-30 w-full min-h-max p-4  flex flex-col justify-center items-center text-center">
                  <p className="text-base mb-4">{project.overview}</p>
                  {project.price && (
                    <p className="font-semibold mb-4">{project.price}</p>
                  )}
                  {project.keyFeature && (
                    <p className="italic mb-4">{project.keyFeature}</p>
                  )}
                  {project.cta && (
                      <p className="text-yellow-800 bg-yellow-100 text-sm font-semibold rounded-md p-4 m-4">
                          {project.cta}
                      </p>
                  )}

                  
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-72">
          <button className="text-white  bg-gold px-6 py-3 my-14 rounded-lg font-semibold hover:bg-darkGold hover:text-white transition">
           <a href="#contact" className="get-directions-btn">
            Reserve your dream home today!
           </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
