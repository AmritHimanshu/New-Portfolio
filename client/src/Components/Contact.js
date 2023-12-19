import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from 'emailjs-com';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Alert } from '@mui/material';

function Contact() {

    const rightVariants = {
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, x: 300 }
    };

    const leftVariants = {
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, x: -300 }
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

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [status, setStatus] = useState("");

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            setStatus("Enter your name");
            setTimeout(() => {
                setStatus("")
            }, 4000)
            return;
        }
        if (!email) {
            setStatus("Enter your email");
            setTimeout(() => {
                setStatus("")
            }, 4000)
            return;
        }
        if (!message) {
            setStatus("Enter your message");
            setTimeout(() => {
                setStatus("")
            }, 4000)
            return;
        }

        emailjs.sendForm('service_up823pm', 'template_ha5sr0x', e.target, 'erwFtJpj2Uem0NkGt')
            .then(res => {
                setStatus("Email Sent successfully");
            }).catch(error => {
                setStatus("Email not sent");
            })

        setName('');
        setEmail('');
        setMessage('');

        setTimeout(() => {
            setStatus("")
        }, 4000)
    }


    return (
        <div id='contact' className='h-screen relative overflow-hidden bg-black bg-opacity-80 text-white'>

            {status ? <div className={`absolute ${status} == "Email Sent successfully" ? bg-[#5cc482] : bg-[#b03747] w-full rounded-lg border-2`}>
                <Alert severity={status == "Email Sent successfully" ? "success" : "error"} >
                    {status}
                </Alert>
            </div> : ""}

            <div className='px-5 py-20 lg:px-32 h-[75vh] flex flex-col md:flex-row items-center justify-between'>

                <motion.div ref={ref} animate={controls} initial="hidden" variants={leftVariants} className='h-[20vh] z-10'>
                    <div className='text-lg sm:text-3xl xl:text-4xl mb-10 tracking-wider'>
                        <div className='font-bold bg-gradient-to-r from-green-800 to-baby-green inline-block text-transparent bg-clip-text cursor-default'>
                            FIND ME ON
                        </div>
                        <div className='sm:mt-6'>
                            Feel free to <span className='text-green-600 font-bold'>connect</span> with me.
                        </div>
                    </div>
                    <div className='flex space-x-10 lg:space-x-20'>
                        <div>
                            <a href="https://github.com/AmritHimanshu" target="_blank">
                                <GitHubIcon className='scale-150 mx-2 text-white hover:text-green-300 xl:scale-[2.5] hover:scale-[2] xl:hover:scale-[3] hover:cursor-pointer ' />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/himanshu-s-243654205" target="_blank" >
                                <LinkedInIcon className='scale-150 mx-2 text-white hover:text-green-300 xl:scale-[2.5] hover:scale-[2] xl:hover:scale-[3] hover:cursor-pointer ' />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/himanshu_heart_hacker_0/" target="_blank">
                                <InstagramIcon className='scale-150 mx-2 text-white hover:text-green-300 xl:scale-[2.5] hover:scale-[2] xl:hover:scale-[3] hover:cursor-pointer ' />
                            </a>
                        </div>
                        <div>
                            <a href="#contact">
                                <TwitterIcon className='scale-150 mx-2 text-white hover:text-green-300 xl:scale-[2.5] hover:scale-[2] xl:hover:scale-[3] hover:cursor-pointer ' />
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div ref={ref} animate={controls} initial="hidden" variants={rightVariants} className='py-10 mt-3 sm:mt-10 lg:mt-0 z-10 drop-shadow-[0_0_25px_rgba(0,157,51,0.3)]'>
                    <div className='flex flex-col items-center justify-items-center text-xl xl:text-3xl mb-3 text-white tracking-wider' >
                        Send mail to me
                    </div>

                    <form ref={form} onSubmit={handleSubmit} className='flex flex-col items-center justify-items-center space-y-5 '>
                        <input
                            className={`px-5 py-2 w-[350px] text-black text-lg font-medium lg:w-[450px] border border-baby-green outline-0 rounded-xl bg-baby-green placeholder-white`}
                            type='text'
                            value={name}
                            name="name"
                            placeholder='your name'
                            autoComplete='false'
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            className={`px-5 py-2 w-[350px] text-black text-lg font-medium lg:w-[450px] rounded-xl border border-baby-green outline-0 bg-baby-green placeholder-white`}
                            type='email'
                            value={email}
                            name="user_email"
                            placeholder='your email address'
                            autoComplete='false'
                            onChange={e => setEmail(e.target.value)}
                        />
                        <textarea
                            className={`px-5 py-2 w-[350px] text-black text-lg font-medium lg:w-[450px] rounded-xl border border-baby-green outline-0 resize-none bg-baby-green placeholder-white`}
                            type='text'
                            value={message}
                            name="message"
                            placeholder='message'
                            rows="6"
                            autoComplete='false'
                            onChange={e => setMessage(e.target.value)}
                        />
                        <button type='submit' className='p-2 bg-baby-green text-black font-bold rounded-lg hover:scale-105 duration-300'>
                            Send Email
                        </button>
                    </form>
                </motion.div>

            </div>

            <div className='h-[25vh] relative'>
                <img className='w-[100vw] h-[400px] absolute top-0 rotate-0' src="https://media.geeksforgeeks.org/wp-content/uploads/20200326181026/wave3.png" alt="" />                
            </div>

        </div>
    )
}

export default Contact