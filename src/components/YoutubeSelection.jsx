import React from 'react'

const YoutubeSelection = () => {
    return (
        <div className='w-max-[1440px] bg-[#434448] p-4'>
            <div className='flex w-full items-center justify-between p-0 lg:px-16 lg:pt-10' >
                <div className='text-[24px] lg:text-[40px] text-white font-bold leading-normal w-[680px] '>
                    Feel the excellent wet braking with Driveways!
                </div>
                <button className='hidden lg:block py-0 px-0 lg:py-4 lg:px-6 text-[16px] font-bold text-[#ED1C24] bg-white hover:bg-[#ED1C24] hover:text-white duration-300 text-center w-full lg:w-[308px]'>
                    Watch All Videos
                </button>
            </div>
            <div className='lg:w-full  h-[193px] sm:h-[370px] md:h-[450px] lg:h-[696px] mt-4 lg:mt-10 pl-0 pb-0 pr-0 lg:pl-[51px] lg:pb-9 lg:pr-[77px]'>
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/355-b4d3j64`}
                    allowFullScreen
                ></iframe>
            </div>
            <div className='block lg:hidden mt-4 pl-0 pb-0 pr-0 lg:pl-[51px] lg:pb-9 lg:pr-[77px] '>

                <button className=' py-4 px-6 text-[16px] font-bold text-[#ED1C24] bg-white hover:bg-[#ED1C24] hover:text-white duration-300 text-center w-full lg:w-[308px]'>
                    Watch All Videos
                </button>
            </div>

        </div>
    )
}

export default YoutubeSelection