import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectOption from './ProjectOption'
// import linkedin from '../images/linkedinPostPage.png';
// import institute from '../images/instituteHomePage.png';

function Project() {

    const rightVariants = {
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, x: 300 }
    };

    const leftVariants = {
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, x: -300 }
    };

    const popVariants = {
        visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
        hidden: { opacity: 0, scale: 0.2 }
    };

    const controls = useAnimation();

    const [ref, inView] = useInView();

    const [project, setProject] = useState();

    const getProjects = async () => {
        try {
            const res = await fetch('https://new-portfolio-api-three.vercel.app/getProject',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            const data = await res.json();
            setProject(data);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        getProjects();

        if (inView) {
            controls.start("visible");
        }
        else {
            // controls.start("hidden")
        }
    }, [controls, inView]);

    return (
        <>
            <div id='project' className='2xl:h-scree bg-baby-green bg-opacity-30 border-2'>
                <div className='px-5 sm:px-[30px] pt-[30px]'>
                    <div className='flex flex-col sm:flex-row justify-center sm:items-center'>
                        <motion.div ref={ref} animate={controls} initial="hidden" variants={leftVariants} className='sm:w-[500px]'>
                            <p className='my-5 ml14 sm:ml0 text-md sm:text-2xl text-black font-medium'>Recent Works</p>
                            <p className='text-lg sm:text-3xl lg:text-5xl font-bold leading-relaxed bg-gradient-to-r from-green-800 to-baby-green inline-block text-transparent bg-clip-text cursor-default'>
                                My Recent Projects & their URL
                            </p>
                        </motion.div>
                        <motion.div ref={ref} animate={controls} initial="hidden" variants={rightVariants} className='sm:w-[525px] sm:mx-20'>
                            <p className='text-md sm:text-xl lg:text-2xl text-black'>
                                I have built my projects using my skills and tried to learn many new things. Have a look on my Projects by clicking on it......
                            </p>
                        </motion.div>
                    </div>

                    <motion.div className='my-24 flex items-center justify-center flex-wrap sm:border-x-8 border-baby-green'>

                        {project?.map((data, index) => (
                            <ProjectOption key={data._id} image={data.image} name={data.name} link={data.link} />
                        ))}

                        {/* <ProjectOption image={linkedin} name="LinkedIn Clone" title="LinkedIn Clone" link="https://linkedin-clone-tv3p.vercel.app/" />
                        <ProjectOption image={institute} name="Patna Science Academy" title="Patna Science Academy" link="https://patnascienceacademy.com/" /> */}
                    </motion.div>
                </div>
            </div>
            <div className='h-[3px] bg-white'></div>
        </>
    )
}

export default Project