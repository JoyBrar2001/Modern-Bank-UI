import { arrowUp } from '../assets'
import styles from '../styles'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/motion'

const GetStarted = () => (
  <motion.div 
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    variants={fadeIn('down')} initial='hidden' whileInView='show'  
  >
    <div className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium text-[18px] leading-[23px] mr-1'>
          <span className='text-gradient'>Get</span>
        </p>
        <img src={arrowUp} alt="arrowup" className='w-[23px] h-[23px] object-contain' />
      </div>

      <p className='font-poppins font-medium text-[18px] leading-[23px]'>
        <span className='text-gradient'>Started</span>
      </p>
    </div>
  </motion.div>
)

export default GetStarted
