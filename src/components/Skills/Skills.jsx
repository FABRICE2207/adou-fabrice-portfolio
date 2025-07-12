import React from 'react';
import Marquee from 'react-fast-marquee';
import {
  FaReact,
  FaFigma,
} from 'react-icons/fa';
import { SiAdobephotoshop, SiNextdotjs } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiFlask } from 'react-icons/si';

const skills = [
  {
    name: "NEXT JS",
    icon: <SiNextdotjs className="text-black" />,
  },
  {
    name: "React JS",
    icon: <FaReact className="text-sky-500" />,
  },
  {
    name: "React Native",
    icon: <FaReact className="text-blue-400" />,
  },
  {
    name: "Python / Flask",
    icon: <SiFlask className="text-black" />,
  },
  {
    name: "Github",
    icon: <FaGithub className="text-black" />,
  },
  {
    name: "Figma",
    icon: <FaFigma className="text-pink-500" />,
  },
  {
    name: "Photoshop",
    icon: <SiAdobephotoshop className="text-blue-900" />,
  },
];

const Skills = () => {
  return (
    <div id="skills" className="bg-[#f7f7f7ab] py-14 px-5">
      {/* Titre */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold uppercase text-gray-800">Compétences</h2>
        <div className="mt-2 h-1 w-24 bg-[#090674] mx-auto rounded"></div>
      </div>

      {/* Marquee */}
      <Marquee gradient={false} speed={50}>
        <div className="flex gap-10 items-center p-2">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-6 w-[140px]  transition"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-sm font-semibold text-gray-700 text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Skills;
