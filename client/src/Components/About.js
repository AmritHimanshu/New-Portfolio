import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutBg from '../images/aboutBg.jpg';
import himanshu from '../images/himanshu.jpg';

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
        <div id='about' className='h-screen w-full ' style={{
            backgroundImage: `url(${aboutBg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center bottom',
        }}>
            <div className='bg-black bg-opacity-60 h-full w-full flex flex-col lg:flex-row items-center justify-center space-y-36 sm:space-y-0 sm:justify-around'>

                <motion.div ref={ref} animate={controls} initial="hidden" variants={skillVariants} className='flex items-center justify-center'>
                    <div className='flex items-center'>
                        <img className='w-[250px] h-[250px] sm:w-[400px] sm:h-[450px] lg:w-[350px] lg:h-[400px] rounded-full' src={himanshu} alt="" />
                    </div>
                </motion.div>

                <div className='flex items-center justify-center'>
                    <div className='w-auto h-auto max-h-[400px] max-w-[650px] px-10 space-y-1 lg:space-y-5'>

                        <motion.div ref={ref} animate={controls} initial="hidden" variants={titleVariants} className='text-xl sm:text-3xl lg:text-5xl  font-semibold tracking-wider bg-gradient-to-r from-green-800 to-baby-green inline-block text-transparent bg-clip-text cursor-default'>About Me</motion.div>

                        <hr className='h-1 outline-none bg-gradient-to-r from-green-800 to-baby-green border-baby-green' />
                        <p className='text-[10px] sm:text-xl font-medium text-white'>
                            Inquisitive | Mysterious | SmartWorker | Tenacious
                        </p>
                        <motion.div ref={ref} animate={controls} initial="hidden" variants={skillVariants} className='text-[13px] sm:text-2xl text-white sm:tracking-wide sm:leading-loose'>
                            Hii, I'm a WEB DEVELOPER and as well as a COMPETITIVE CODER. I have made many projects by using my skills which are mentioned below. I am a full stack developer and an enthusiastic coder.
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