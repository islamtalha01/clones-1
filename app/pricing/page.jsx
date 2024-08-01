'use client'

import { PRICING } from '../lib/constants'

import PriceCard from '../../components/PriceCard'

const PricingPage = () => {
  return (
    <div className='container mx-auto mt-4'>
      <h3 className='sm:text-xl uppercase font-semibold text-center mb-2 sm:mb-6 text-secondary'>
        Pricing Plan
      </h3>
      <h2 className='text-[22px] sm:text-[32px] leading-[120%] md:text-[40px] max-w-[450px] mx-auto capitalize font-helveticaBold font-bold text-center  text-white mb-8'>
        Pricing built for businesses of all sizes
      </h2>
      <p className='text-sm sm:text-base capitalize text-stonecairn max-w-[500px] text-center mx-auto mb-16'>
        Provide flexibility and affordability while also offering features and services that can scale as a
        business grows
      </p>
      <div className='flex justify-center items-center flex-wrap gap-6  '>
        {PRICING?.map((price) => (
          <PriceCard price={price} key={price.title} />
        ))}
      </div>
    </div>
  )
}

export default PricingPage
