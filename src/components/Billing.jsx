import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../styles'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/motion'

const Billing = () => {
  return (
    <section id='product' className={`${layout.sectionReverse}`}>
      <motion.div variants={fadeIn('left')} initial='hidden' whileInView='show' className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
      </motion.div>

      <motion.div variants={fadeIn('right')} initial='hidden' whileInView='show' className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your<br className='sm:block hidden' />
        billing & invoicing</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint tenetur fuga illo nobis eum non fugit quaerat, vel et obcaecati!
        </p>

        <div className='flex flex-row flex-wrap mt-6 sm:mt-10'>
          <img src={apple} alt="apple" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer shadow-white/10 shadow-lg' />
          <img src={google} alt="google" className='w-[128px] h-[42px] object-contain cursor-pointer shadow-white/10 shadow-lg' />
        </div>
      </motion.div>
    </section>
  )
}

export default Billing
