import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px]' id="contact">

      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
            Are you ready <span>to </span>
            collaborate with me?
        </h1>

        <p className='text-white-200 md:mt-10 my-5 text-center'>
            Reach out to me today
        </p>
        <a href="mailto:@ikshasam09@gmail">
            <MagicButton 
            title="Let&apos;s get in touch"
            icon={<FaLocationArrow/>}
            position="right">

            </MagicButton>

        </a>

      </div>

      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2025 Samiksha</p>

        <div className='flex items-center md:gap-3 gap-6'>
            {socialMedia.map((profile) => (
                <div key={profile.id} className='w-10 h-10 cursor-pointer flex
                justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                <img src={profile.img}
                 width={20} height={20} />
                 </div>
            ))}

        </div>
      </div>
    </footer>
  )
}

export default Footer
