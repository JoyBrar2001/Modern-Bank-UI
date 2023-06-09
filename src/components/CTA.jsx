import React from 'react'
import styles from '../styles'
import Button from './Button'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/motion'

const CTA = () => {
  return (
    <motion.section variants={fadeIn('down')} initial='hidden' whileInView='show'  className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col sm:flex-row bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex flex-1 flex-col'>
        <h2 className={styles.heading2}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payments and grow your business anywhere on the planet</p>
      </div>

      <div className={`${styles.flexCenter} ml-0 sm:ml-10 mt-10 sm:mt-0`}>
        <Button />
      </div>
    </motion.section>
  )
}

export default CTA
