import React from 'react'
import SkillsCard from './SkillsCard'

const Skills = () => {

  const skill1 = "w-4/12";
  const skill2 = "w-5/12";
  const skill3 = "w-4/12";
  const skill4 = "w-4/12";
  const skill5 = "w-4/12";

  return (
    <div id="skills" className='bg-[#d6d6dbb6] py-10 px-10'>
      <div className='w-full flex lg:flex-col flex-col justify-center items-center'>
        <h2 className='font-bold text-[30px] uppercase'>compétence</h2>
        <div className='bg-[#090674] w-[100px] h-[6px]'></div>
      </div>

      <div className='flex lg:flex-row flex-col justify-between px-10 py-5 gap-5'>
          <div className='w-full'>
            <div data-aos="fade-up" data-aos-delay="700">
              <SkillsCard title="React JS" width={skill1} val="40%"/>
            </div>
            <div data-aos="fade-up" data-aos-delay="900">
              <SkillsCard title="React Native" width={skill3} val="40%"/>
            </div>
            <div data-aos="fade-up" data-aos-delay="1100">
              <SkillsCard title="Photoshop" width={skill5} val="40%"/>
            </div>
          </div>
          <div className='w-full'>
            <div data-aos="fade-up" data-aos-delay="800">
              <SkillsCard title="Pyton (Flask)" width={skill2} val="55%" />
            </div>
            <div data-aos="fade-up" data-aos-delay="1000">
              <SkillsCard title="Figma" width={skill4} val="40%"/>
            </div>
          </div>

      </div>
    </div>
  )
}

export default Skills