import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCard'
import {  testimonials } from '@/data'

const Clients = () => {
  return (
   <div className='py-20' id='testimonials'>
           <h1 className='heading'>
               Kind words from {' '}
               <span className='text-purple'>my classmates</span>
           </h1>
           <div className='flex flex-col items-center
           mx-lg:mt-10'>
            <InfiniteMovingCards items={testimonials}
            direction="right"
            speed="slow"
            />
            </div>
            </div>
  )
}

export default Clients