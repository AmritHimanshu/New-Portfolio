import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LaptopIcon from '@mui/icons-material/Laptop';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

function Header() {

    const titleVariants = {
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, x: 300 }
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

    const [status, setStatus] = useState(false);

    const handleOnClick = () => {
        (status ? setStatus(false) : setStatus(true));
    }

    return (
        <div className='m-auto py-5 px-5 text-white flex items-center justify-between border-b'>

            <div className='text-lg md:text-3xl text-baby-green font-bold'>
                हि-manshu <span className='text-white'>.</span>
            </div>

            <div className='relative sm:hidden'>

                <div className='cursor-pointer' onClick={handleOnClick}>
                    <MenuIcon />
                </div>

                {status ? (
                    <ul className='px-2 flex flex-col items-center justify-center absolute z-10 right-4 bg-black opacity-80 text-green-400 rounded-md'>
                        <a href="/" className='mx-8 py-1 my-2 w-full text-center' onClick={() => setStatus(false)}>
                            <li className='font-bold cursor-pointer hover:scale-125 hover:duration-300'>Home</li>
                        </a>
                        <div className='h-[1px] w-full bg-white'></div>
                        <a href="#about" className='mx-8 py-1 my-2 w-full text-center' onClick={() => setStatus(false)}>
                            <li className='font-bold cursor-pointer hover:scale-125 hover:duration-300'>About</li>
                        </a>
                        <div className='h-[1px] w-full bg-white'></div>
                        <a href="#skill" className='mx-8 py-1 my-2 w-full text-center' onClick={() => setStatus(false)}>
                            <li className='font-bold cursor-pointer hover:scale-125 hover:duration-300'>Skills</li>
                        </a>
                        <div className='h-[1px] w-full bg-white'></div>
                        <a href="#project" className='mx-8 py-1 my-2 w-full text-center' onClick={() => setStatus(false)}>
                            <li className='font-bold cursor-pointer hover:scale-125 hover:duration-300'>Projects</li>
                        </a>
                        <div className='h-[1px] w-full bg-white'></div>
                        <a href="#contact" className='mx-8 py-1 my-2 w-full text-center' onClick={() => setStatus(false)}>
                            <li className='font-bold cursor-pointer hover:scale-125 hover:duration-300'>Contact</li>
                        </a>
                    </ul>
                ) : (
                    <div></div>
                )}

            </div>

            <motion.div ref={ref} animate={controls} initial="hidden" variants={titleVariants} className='hidden sm:inline'>
                <ul className='w-auto flex items-center justify-center'>
                    <a href="/" className='mx-3 md:mx-4 lg:mx-8 flex flex-row lg:font-bold cursor-pointer hover:scale-125 hover:duration-300 after:content-[" "] after:w-0 after:h-1 after:bg-baby-green after:absolute after:left-0 after:bottom-[-6px] hover:after:w-full after:duration-700'>
                        <HomeIcon className='mr-1 md:mr-2' />
                        <li className=''>Home</li>
                    </a>
                    <a href="#about" className='mx-3 md:mx-4 lg:mx-8 flex flex-row lg:font-bold cursor-pointer hover:scale-125 hover:duration-300 after:content-[" "] after:w-0 after:h-1 after:bg-baby-green after:absolute after:left-0 after:bottom-[-6px] hover:after:w-full after:duration-700'>
                        <PersonIcon className='mr-1 md:mr-2' />
                        <li className=''>About</li>
                    </a>
                    <a href="#skill" className='mx-3 md:mx-4 lg:mx-8 flex flex-row lg:font-bold cursor-pointer hover:scale-125 hover:duration-300 after:content-[" "] after:w-0 after:h-1 after:bg-baby-green after:absolute after:left-0 after:bottom-[-6px] hover:after:w-full after:duration-700'>
                        <PsychologyIcon className='mr-1 md:mr-2'/>
                        <li className=''>Skills</li>
                    </a>
                    <a href="#project" className='mx-3 md:mx-4 lg:mx-8 flex flex-row lg:font-bold cursor-pointer hover:scale-125 hover:duration-300 after:content-[" "] after:w-0 after:h-1 after:bg-baby-green after:absolute after:left-0 after:bottom-[-6px] hover:after:w-full after:duration-700'>
                        <LaptopIcon className='mr-1 md:mr-2' />
                        <li className=''>Projects</li>
                    </a>
                    <a href="#contact" className='mx-3 md:mx-4 lg:mx-8 flex flex-row lg:font-bold cursor-pointer hover:scale-125 hover:duration-300 after:content-[" "] after:w-0 after:h-1 after:bg-baby-green after:absolute after:left-0 after:bottom-[-6px] hover:after:w-full after:duration-700'>
                        <PermContactCalendarIcon className='mr-1 md:mr-2' />
                        <li className=''>Contact</li>
                    </a>
                </ul>
            </motion.div>

        </div>
    )
}

export default Header