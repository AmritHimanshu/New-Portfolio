import React from 'react'
import computer from '../images/computerScreen1.png';
import LinkIcon from '@mui/icons-material/Link';

function ProjectOption({ image, name, link }) {
  return (
    <div className='py-2 lg:m-2 flex flex-col items-center'>

      <a href={link} target='_blank'>
        <div className='relative w-[200px] lg:w-[350px] drop-shadow-[0_35px_35px_rgba(42,42,42,0.1)] hover:scale-105 hover:drop-shadow-[0_35px_35px_rgba(42,42,42,0.4)] duration-300 cursor-pointer' title={link}>
          <img className='' src={computer} alt="" style={{ width: '380px' }} />
          <img className='absolute top-[6px] left-[5px] lg:top-[9px] lg:left-[11px] w-[190px] h-[105px] lg:h-[200px] lg:w-[330px]' src={image} alt="" />
        </div>
      </a>

      <div className='flex items-center'>
        <div className='h-1 w-20 mx-2 border-2 border-baby-green bg-baby-green'></div>

        <div className='my-5 text-sm sm:text-xl text-center font-medium cursor-default'>
          <a href={link} target='_blank' title={link} className='hidden sm:inline'>
            <LinkIcon className='mx-2 animate-pulse text-baby-green hover:text-green-900 hover:animate-none' sx={{ fontSize: "40px" }} />
          </a>
          {name}
        </div>

        <div className='h-1 w-20 mx-2 border-2 border-baby-green bg-baby-green'></div>
      </div>

    </div>
  )
}

export default ProjectOption