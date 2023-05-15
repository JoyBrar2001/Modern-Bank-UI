import React from 'react'
import styles, { layout } from '../styles'
import Button from './Button'
import { card } from '../assets'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/motion'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <motion.div variants={fadeIn('left')} initial='hidden' whileInView='show' className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal<br className='hidden sm:block' />in few easy steps</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, voluptatem.</p>

        <Button styles="mt-10" />
      </motion.div>

      <motion.div variants={fadeIn('right')} initial='hidden' whileInView='show' className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]' />
      </motion.div>
    </section>
  )
}

export default CardDeal
