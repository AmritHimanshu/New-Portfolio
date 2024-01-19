import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutBg from '../images/aboutBg.jpg';
import himanshu from '../images/himanshu.png';

function About() {

    const titleVariants = {
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, x: -300 }
    };

    const aboutVariants = {
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, x: -300 }
    };

    const skillVariants = {
        visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
        hidden: { opacity: 0, scale: 0.2 }
    };

    const controls = useAnimation();

    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
        else {
            // controls.start("hidden")
        }
    }, [controls, inView]);

    return (
        <div id='about' className='h-screen w-full' style={{
            backgroundImage: `url(${aboutBg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center bottom',
        }}>
            <div className='px-2 bg-black bg-opacity-60 h-full w-full flex flex-col lg:flex-row items-center justify-center space-y-10 sm:space-y-0 sm:justify-around'>

                <motion.div ref={ref} animate={controls} initial="hidden" variants={skillVariants} className='flex items-center justify-center'>
                    <div className='flex items-center'>
                        <img className='w-[150px] h-[200px] sm:w-[400px] sm:h-[450px] lg:w-[700px] lg:h-[700px] object-cover' src={himanshu} alt="" />
                    </div>
                </motion.div>

                <div className='flex items-center justify-center'>
                    <div className='w-auto h-auto max-h-[400px max-w-[950px] px-10 space-y-1 lg:space-y-5'>

                        <motion.div ref={ref} animate={controls} initial="hidden" variants={titleVariants} className='text-xl sm:text-3xl lg:text-5xl  font-semibold tracking-wider bg-gradient-to-r from-green-800 to-baby-green inline-block text-transparent bg-clip-text cursor-default'>About Me</motion.div>

                        <hr className='h-1 outline-none bg-gradient-to-r from-green-800 to-baby-green border-baby-green' />
                        <p className='text-[10px] sm:text-xl font-medium text-white'>
                            Inquisitive | Mysterious | SmartWorker | Tenacious
                        </p>
                        <motion.div ref={ref} animate={controls} initial="hidden" variants={skillVariants} className='text-[11px] md:text-[13px] xl:text-2xl text-white sm:tracking-wide sm:leading-loose'>
                            Enthusiastic web developer and coder, I excel in transforming concepts into digital reality with a passion for problem-solving. With a diverse portfolio showcasing expertise in e-commerce, user interfaces, and backend optimization, I thrive in challenging environments. A perpetual learner, I stay ahead in the dynamic tech landscape, embracing new languages and frameworks. Committed to innovation, I approach obstacles as opportunities for growth. Eager to contribute my skills to dynamic projects, I bring a relentless drive for excellence
                        </motion.div>

                        <motion.div ref={ref} animate={controls} initial="hidden" variants={titleVariants} className='text-baby-green cursor-default'>
                            🆂🆃🅸🅻🅻 - 🅻🅸🆅🅸🅽🅶 - 🅾🅽 - 🅼🅾🅼'🆂 - 🅿🅾🅲🅺🅴🆃 - 🅼🅾🅽🅴🆈
                        </motion.div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default About