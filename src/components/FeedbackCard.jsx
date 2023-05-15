import React from 'react'
import { quotes } from '../assets'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/motion'

const FeedbacnkCard = ({ content, name, title, img, index }) => {
  return (
    <motion.div variants={fadeIn('left', index*0.2)} initial='hidden' whileInView='show' className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] mr-0 sm:mr-5 md:mr-10 feedback-card'>
      <img src={quotes} alt="image here" className='w-[42px] h-[27px] object-contain' />
      <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>{content}</p>

      <div className='flex flex-row'>
        <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full' />

        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>{name}</h4>
          <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite my-10'>{title}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default FeedbacnkCard
