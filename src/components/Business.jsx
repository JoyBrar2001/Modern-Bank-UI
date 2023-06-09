import React from 'react'
import styles, { layout } from '../styles'
import Button from '../components/Button'
import { features } from '../constants'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/motion'

const FeatureCard = ({ icon, title, content, index}) => (
  <motion.div 
    variants={fadeIn('right', index * 0.1)} initial='hidden' whileInView='show'
    className={`flex flex-row p-6 rounded-[20px] ${index !== features.length ? 'mb-6' : 'mb-0' } feature-card`}
  >
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain' />
    </div>
    <div className='flex flex-1 flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>{title}</h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>{content}</p>
    </div>
  </motion.div>
)

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <motion.div 
        variants={fadeIn('left')} initial='hidden' whileInView='show'
        className={layout.sectionInfo}
      >
        <h2 className={styles.heading2}>Your do the Business, <br className='sm:block hidden' />
          we'll do the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit system, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button styles="mt-10" />
      </motion.div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} index={index} {...feature} />
        ))}
      </div>

    </section>
  )
}

export default Business
