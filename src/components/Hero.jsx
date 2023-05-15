import styles from '../styles'
import { discount, robot } from '../assets'
import GetStarted from '../components/GetStarted'
import React from 'react'
import { easeInOut, motion } from 'framer-motion'
import { fadeIn } from '../constants/motion'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0 `}
       >
        <motion.div 
          variants={fadeIn('left')} initial='hidden' whileInView='show'
          className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'
        >
          <img src={discount} alt='discount' className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>20% </span>
            <span>Discount for </span>
            <span className='text-white'>1 Month </span>
            <span>Account</span>
          </p>
        </motion.div>

        <div className='flex flex-row justify-between items-center w-full'>
          <motion.h1 
          variants={fadeIn('left')} initial='hidden' whileInView='show'
          className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            The Next<br />
            <span className={`text-gradient`}>Generation<br /></span>
          </motion.h1>
          <div className='ss:flex hidden mr-0 md:mr-4'>
            <GetStarted />
          </div>
        </div>

        <motion.h1 
        variants={fadeIn('left', 0.1)} initial='hidden' whileInView='show'
        className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>Payment Method</motion.h1>
        <motion.p 
        variants={fadeIn('left', 0.2)} initial='hidden' whileInView='show'
        className={`${styles.paragraph} max-w-[470px] mt-5`}
        >Our Team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees
        </motion.p>

      </div>

      <motion.div 
        variants={fadeIn('right')} initial='hidden' whileInView='show'
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img src={robot} alt="billing" className='w-full h-full relative z-[5]' />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[85%] rounded-full bottom-40 white__gradient' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
      </motion.div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero
