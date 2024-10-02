import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";
import Header from './Header';
import web from '../images/web.jpg';
import illustration from '../images/illustration1.png'
import Resume from '../Files/Himanshu_smpl2_Resume.pdf';

function FirstSection() {

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
            controls.start("hidden")
        }
    }, [controls, inView]);

    return (
        <div className='h-[100vh] cursor-default'>
            <div className='h-[100vh]' style={{
                backgroundImage: `url(${web})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center bottom',
            }}>

                <div className='h-[100vh] bg-black bg-opacity-70 flex flex-col items-center'>

                    <div className='mt-[10px] w-full shadow-xl'>
                        <Header />
                    </div>

                    <div className='h-full flex md:flex-col lg:flex-row items-center justify-center relative'>

                        <div className={`text-center`} >

                            <div className='pb-5 text-2xl sm:text-4xl md:text-6xl text-baby-green font-black tracking-wider leading-loose drop-shadow-[0_0_35px_rgba(85,171,111,0.8)] flex justify-center'>
                                <span className='mr-6'>Hii, </span><span className=''>
                                    <Typewriter
                                        options={{
                                            strings: ['This is Himanshu'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </span>
                            </div>

                            <div className='text-sm m-auto w-[320px] sm:w-auto sm:text-xl text-white tracking-wide leading-loose xl:w-[45vw]'>
                                {/* I am a Web-Developer and Coder...... Just following my passion...... Eager to learn new and interesting things. */}
                                Full-Stack Developer | Passionate about building modern web apps with React, Next.js, and Node.js. Exploring SQL, and TypeScript. Let's connect and create something amazing together!
                            </div>

                            <div className='flex flex-row items-center mt-10 w-[400px] mx-auto'>

                                <div className='h-1 w-20 mx-2 border-2 border-baby-green bg-baby-green'></div>

                                <div className='text-2xl text-white font-bold tracking-widest w-[205px] text-center'>
                                    <Typewriter

                                        onInit={(typewriter) => {

                                            typewriter

                                                .typeString("Welcomes You")

                                                .pauseFor(1000)
                                                .deleteAll()
                                                .typeString("From India")
                                                .start();
                                        }}
                                    />
                                </div>

                                <div className='h-1 w-20 mx-2 border-2 border-baby-green bg-baby-green'></div>

                            </div>

                            {/* <div className='mt-10 flex items-center justify-center'>
                                <a href={Resume} download="Himanshu's Resume">
                                    <div className='p-1 xl:px-3 xl:py-2 text-lg xl:text-xl border-4 border-baby-green bg-baby-green text-black font-bold hover:scale-105 hover:bg-neutral-900 hover:text-baby-green duration-300 rounded-lg xl:tracking-widest' title='Download Resume'>Download Resume</div>
                                </a>
                            </div> */}

                        </div>

                        <div className='md:pt-36 hidden xl:block'>
                            <img src={illustration} alt="" className='w-[500px] animate-bounce' />
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default FirstSection
