import React from 'react'
import { feedback } from '../constants'
import styles from '../styles'
import FeedbackCard from './FeedbackCard'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/motion'

const Testimonials = () => {
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />

      <motion.div variants={fadeIn('down')} initial='hidden' whileInView='show' className='w-full flex justify-between items-center flex-col md:flex-row mb-6 sm:mg-16 relative z-[1]'>
        <h1 className={styles.heading2}>What people are<br className='sm:block hidden' />saying about us</h1>

        <div className='w-full mt-6 md:mt-0'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
      </motion.div>

      <div className='flex flex-wrap justify-center sm:justify-start w-full feedback-container relative z-[1]'>
        {feedback.map((card, index) => (
          <FeedbackCard key={card.id} index={index} {...card} />
        ))}
      </div>

    </section>
  )
}

export default Testimonials
