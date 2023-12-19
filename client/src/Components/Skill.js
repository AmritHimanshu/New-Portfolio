import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SkillOption from './SkillOption'
import c from '../images/c.png';
import cpp from '../images/c++.png';
import react from '../images/react js.png'
import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/js.png';
import node from '../images/node js.png';
import mongodb from '../images/mongodb.png';
import redux from '../images/redux.png';
import firebase from '../images/firebase.png';
import bootstrap from '../images/bootstrap.png';
import styledComponent from '../images/styledComponent.png';
import tailwind from '../images/tailwind.png';
import wordpress from '../images/wordpress.png';
import linux from '../images/linux.png';

function Skill() {

    const rightVariants = {
        visible: { opacity: 1, x: 0, transition: { duration: 2, delay: 0 } },
        hidden: { opacity: 0, x: 1000 }
    };

    const leftVariants = {
        visible: { opacity: 1, x: 0, transition: { duration: 2, delay: 0 } },
        hidden: { opacity: 0, x: -1000 }
    };

    const popVariants = {
        visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 1 } },
        hidden: { opacity: 0, scale: 0.2 }
    };

    const controls = useAnimation();

    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div id='skill' className='relative overflow-x-hidden'>

            <div className='h-[550px] bg-black bg-opacity-80 relative'>
                <img className='w-[100vw] sm:h-[300px] absolute bottom-0' src="https://media.geeksforgeeks.org/wp-content/uploads/20200326181026/wave3.png" alt="" />
            </div>

            <div className='-mt-[550px] lg:-mt-[400px] mb-16 relative flex flex-col lg:flex-row items-center justify-center'>

                <div className='my-[40px] ml-20 mr-20'>
                    <div  className='px-5 lg:py-10 lg:px-0 text-3xl lg:text-5xl w-auto lg:h-[70vh lg:h-full lg:w-[80px] text-center tracking-widest leading-loose tracking-wider text-black bg-baby-green rounded-xl bg-opacity-90 drop-shadow-[0_0_25px_rgba(85,171,111,0.8)] hover:scale-105 duration-300 cursor-default flex space-x-4 lg:flex-col lg:space-y-10 lg:space-x-0'>
                        <div>🆂</div>
                        <div>🅺</div>
                        <div>🅸</div>
                        <div>🅻</div>
                        <div>🅻</div>
                        <div>🆂</div>
                    </div>
                </div>

                <div ref={ref} className='flex flex-row items-center justify-center flex-wrap h-[500px] md:h-full overflow-y-scroll md:overflow-y-hidden overflow-x-hidden'>
                    <SkillOption icon={c} name='c language' animate={controls} initial="hidden" variants={leftVariants} />
                    <SkillOption icon={cpp} name='c++ language' animate={controls} initial="hidden" variants={rightVariants} />
                    <SkillOption icon={html} name='HTML' animate={controls} initial="hidden" variants={leftVariants} />
                    <SkillOption icon={css} name='CSS' animate={controls} initial="hidden" variants={rightVariants} />
                    <SkillOption icon={js} name='JavaScript' animate={controls} initial="hidden" variants={leftVariants} />
                    <SkillOption icon={react} name='React js' animate={controls} initial="hidden" variants={rightVariants} />
                    <SkillOption icon={bootstrap} name='Bootstrap' animate={controls} initial="hidden" variants={leftVariants} />
                    <SkillOption icon={firebase} name='Firebase' animate={controls} initial="hidden" variants={leftVariants} />
                    <SkillOption icon={redux} name='Redux' animate={controls} initial="hidden" variants={leftVariants} />
                    <SkillOption icon={tailwind} name='Tailwind CSS' animate={controls} initial="hidden" variants={rightVariants} />
                    <SkillOption icon={node} name='Node js' animate={controls} initial="hidden"variants={rightVariants} />
                    <SkillOption icon={mongodb} name='MongoDB' animate={controls} initial="hidden" variants={rightVariants} />
                    <SkillOption icon={wordpress} name='Wordpress' animate={controls} initial="hidden" variants={leftVariants} />
                    <SkillOption icon={styledComponent} name='Styled Component' animate={controls} initial="hidden" variants={rightVariants} />
                    <SkillOption icon={linux} name='Linux' animate={controls} initial="hidden" variants={leftVariants} />
                </div>

            </div>

            <div className='h-[20px] bg-neutral-600'></div>

        </div>
    )
}

export default Skill