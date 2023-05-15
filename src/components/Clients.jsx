import React from 'react'
import { clients } from '../constants'
import styles from '../styles'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/motion'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full justify-center items-center`}>
        {clients.map((client,index) => (
          <motion.div variants={fadeIn('left', index*0.1)} initial='hidden' whileInView='show' key={client.id} className='min-w-[120px] sm:min-w-[192px]'>
            <img src={client.logo} alt="client" className='w-[100px] sm:w-[170px] object-contain' />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Clients
