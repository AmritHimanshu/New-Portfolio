import React from 'react'
import { motion, useAnimation } from "framer-motion";

function SkillOption({icon,name,animate,variants}) {
    return (
        <motion.div animate={animate} initial="hidden" variants={variants} className='bg-white p-1 md:bg-transparent md:p-0 w-[50px] md:w-[100px] lg:w-[150px] m-10 text-green-500 font-bold flex flex-col items-center justify-center drop-shadow-[0_35px_35px_rgba(42,42,42,0.6)] hover:scale-105 duration-300 cursor-default' title={name}>
            <img className='' src={icon} alt="" />
            <div className='text-lg xl:text-xl text-center'>
                {/* {name} */}
            </div>
        </motion.div>
    )
}

export default SkillOption