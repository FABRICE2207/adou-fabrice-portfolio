import React, { useState } from "react";
import imageProject1 from "../../assets/1.png";
import imageProject2 from "../../assets/2.jpg";
import imageProject3 from "../../assets/3.png";
import imageProject4 from "../../assets/4.png";
import imageProject5 from "../../assets/5.png";
import imageProject6 from "../../assets/6.png";
import imageProject7 from "../../assets/7.png";
import imageDesign1 from "../../assets/design_1.png";
import imageDesign2 from "../../assets/design_2.png";
import { BsEyeFill } from "react-icons/bs";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      image: imageProject2,
      link: "https://www.qr.jilx.ci/",
      title: "Voir la plateforme de QrProd",
      category: "application",
    },
    {
      id: 2,
      image: imageProject3,
      link: "https://site-web-le-campeur.vercel.app/",
      title: "Voir le site du CAMPEUR",
      category: "site",
    },
    {
      id: 3,
      image: imageProject4,
      link: "https://siteweb-adca-construction.vercel.app/",
      title: "Voir le site de l'ADCA",
      category: "site",
    },
    {
      id: 4,
      image: imageProject5,
      link: "https://ridissi.vercel.app/",
      title: "Voir le site de RIDISSI",
      category: "application",
    },
    {
      id: 5,
      image: imageProject6,
      link: "https://www.cv.djilx.ci/",
      title: "Voir le site mon CV en ligne",
      category: "site",
    },
    {
      id: 6,
      image: imageDesign1,
      link: "https://www.figma.com/proto/UbxxZPtldajkFLoEVDKN6B/Marquette_app_monile_placali_abour%C3%A9?node-id=1-8&t=RD3sxDteoznCSjuB-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1",
      title: "Voir le design",
      category: "design",
    },
    {
      id: 7,
      image: imageDesign2,
      link: "https://www.figma.com/proto/TWUjKiRod26S0BLmgmUoJf/Marquette_site_web_e-commerce-YKPARF?node-id=0-1&p=f&t=0xZtDqnY9PlbRHSH-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=35%3A2",
      title: "Voir le design",
      category: "design",
    },
    {
      id: 8,
      image: imageProject7,
      link: "https://ak-construction-service.vercel.app/",
      title: "Voir le site",
      category: "site",
    },
  ];

  // Filtrage des projets selon la catégorie
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div id="projects" className="bg-white lg:w-full pb-10">
      {/* Titre */}
      <div className="w-full flex flex-col justify-center items-center text-center">
        <h2 className="font-bold text-[30px] uppercase">Mes projets</h2>
        <div className="bg-[#090674] w-[100px] h-[6px] mb-6"></div>
      </div>

      {/* Boutons de tri */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        <button
          onClick={() => setFilter("all")}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
            filter === "all"
              ? "bg-[#090674] text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Tous
        </button>
        <button
          onClick={() => setFilter("application")}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
            filter === "application"
              ? "bg-[#090674] text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Applications Web
        </button>
        <button
          onClick={() => setFilter("site")}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
            filter === "site"
              ? "bg-[#090674] text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Sites Web
        </button>
        <button
          onClick={() => setFilter("design")}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
            filter === "design"
              ? "bg-[#090674] text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Design UX/UI
        </button>
      </div>

      {/* Liste des projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="relative p-4 bg-white lg:h-[210px] h-[50vh] bg-cover bg-center shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="absolute inset-0 bg-[#090674] bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg cursor-pointer">
                <div className="text-white flex flex-col justify-center items-center">
                  <BsEyeFill size={30} />
                  <p>{project.title}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
