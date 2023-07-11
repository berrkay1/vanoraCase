import React from 'react'

const SliderCart = ({ cart }) => {
    return (
        <div className=' ml-0 2xl:ml-3  border-[#E0D8D7)] border-[1px]  w-full md:w-[321px] lg:w-[376px] h-[290px] sm:h-[257px] lg:h-[235px] bg-white rounded-sm flex flex-col justify-between  border-b-4 border-b-[#ED1C24]'>
            <div className='p-6'>
                <h3 className='text-[#400e03] text-[20px] font-bold'>{cart.title}</h3>
                <p className='mt-3 text-sm'>{cart.desc}</p>
            </div>

            <div className='flex gap-2 px-2 py-[10px] '>
                <a className='text-[#ED1C24] p-4 rounded-sm bg-[#FDE4E5] w-[50%] text-center' href="#">Learn More</a>
                <a href="#" className='text-white p-4 rounded-sm bg-[#ED1C24] w-[50%] text-center' >Find a Dealer</a>
            </div>
        </div>
    )
}

export default SliderCart