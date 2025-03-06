import React from 'react'

const Exprience = () => {
  return (
    <div id='experience' className='lg:w-full px-5 py-[40px] '>
      <div className='w-full flex lg:flex-col flex-col justify-center items-center'>
        <h2 className='font-bold text-[30px]'>EXPERIENCE</h2>
        <div className='bg-[#090674] w-[100px] h-[6px]'></div>
      </div>
      
       <div className='w-full flex lg:flex-row flex-col gap-10 px-10 py-10'>
              <div className='w-full' data-aos="fade-right" data-aos-delay="300">
                {/* Période 1 */}
                 <div className='flex flex-col gap-5 text-right'>
                    <h1 className="text-gray-600 text-xl font-bold">Novembre 2021 - Mai 2022</h1>
                    <p className="text-gray-600 text-xl">Stagiaire au département projet</p>
                 </div>
                  {/* Période 2 */}
                 <div className='flex flex-col gap-5 text-right mt-28'>
                    <h1 className="text-gray-600 text-xl font-bold">Depuis Mai 2022</h1>
                    <p className="text-gray-600 text-xl">Develeppeur Full-Stack et Mobile</p>
                 </div>
              </div>
              {/* Trait du milieu */}
              <div className='bg-[#090674] w-2'></div>

              <div className='w-full' data-aos="fade-left" data-aos-delay="1000">
                <div className='w-full'>
                  {/* Mission 1 */}
                  <div className='flex flex-col gap-5'>
                      <h1 className="text-gray-600 text-xl font-bold">NGSER</h1>
                      <p className="text-gray-600 text-xl">
                        - Suivie des projets de l'entreprise <br />
                        - Rédaction de mon rapport de stage sous le thème : <br />
                          Système de Gestion des adhérents pour les scouts conçu avec le langage Ruby
                      </p>
                  </div>

                  {/* Mission 2 */}
                  <div className='flex flex-col gap-5 mt-7'>
                      <h1 className="text-gray-600 text-xl font-bold">DJILX CI</h1>
                      <p className="text-gray-600 text-xl">
                        - Maintenance des sites internet <br />
                        - Conception des dashboard (Back Office) et api avec Python (Flask) <br />
                      </p>
                  </div>
                </div>
              </div>

            </div>
    </div>
  )
}

export default Exprience