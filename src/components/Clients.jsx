import React from 'react'
import { clients } from '../constants'
import styles from '../styles'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full justify-center items-center`}>
        {clients.map((client) => (
          <div key={client.id} className='min-w-[120px] sm:min-w-[192px]'>
            <img src={client.logo} alt="client" className='w-[100px] sm:w-[170px] object-contain' />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients
