import React from 'react'
import { stats } from '../constants/index'
import styles from '../styles'

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap mb-6 sm:mb-20`}>
      {stats.map((stat, index) => (
        <div key={stat.id} className={`flex flex-1 justify-start items-center flex-row m-3 relative`}>
          <h4 className='font-poppins font-semibold text-[30px] xs:text-[40px] leading-[43px] xs:leading-[53px] text-white'>{stat.value}</h4>
          <p className='font-poppins font-normal text-[15px] xs:text-[20px] leading-[21px] xs:leading-[26px] text-gradient uppercase ml-3 w-full'>{stat.title}</p>
          <div className='w-full flex justify-center items-center'>
            <div className={index === stats.length - 1 ? `hidden` : `absolute h-[20px] w-[1.5px] bg-gray-500 rounded-full right-[12%]`} />
          </div>
        </div>
      ))}
    </section>
  )
}

export default Stats
