import React from 'react'

const Hero = () => {
  return (
    <div className=' bg-hero-small md:bg-hero-pattern bg-no-repeat bg-cover bg-center h-[464px] flex-shrink-0 w-max-[1440px]'>
      <div style={{ background: 'rgba(0, 0, 0, 0.24)' }} className='w-full h-full relative '>
        <div className='w-full absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex items-center flex-col gap-8'>
          <h2 className=' text-center text-[38px] lg:text-[56px]  font-bold text-white break-words'>Nothing can stop <br /> you</h2>
          <a href="#" className='bg-white text-[#ED1C24] text-[16px] font-bold py-4 px-6 hover:bg-[#ED1C24] hover:text-white duration-300'>FIND OUT MORE</a>
        </div>
      </div>
    </div>
  )
}

export default Hero