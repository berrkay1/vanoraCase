import React from 'react'
import Slider from "react-slick";
import { FiArrowLeft } from 'react-icons/fi';
import { FiArrowRight } from 'react-icons/fi';
import SliderCart from './SliderCart';

const SliderSection = () => {

  const cartData = [
    {
      title: 'ICEWAYS',
      desc: 'City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.'
    },
    {
      title: 'Driveways Sport',
      desc: 'Driveways is a ‘’Comfort tyre’’ developed for a considerably wide vehicle pool ranging from middle class sedans to upper class comfort automobiles.'
    },
    {
      title: 'Driveways COMPETUS H/P',
      desc: 'City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.'
    },
    {
      title: 'ICEWAYS',
      desc: 'City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.'
    },
    {
      title: 'Driveways Sport',
      desc: 'Driveways is a ‘’Comfort tyre’’ developed for a considerably wide vehicle pool ranging from middle class sedans to upper class comfort automobiles.'
    },
    {
      title: 'Driveways COMPETUS H/P',
      desc: 'City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.'
    },


  ];

  const cicrle = document.getElementsByTagName('ul').item(1)
  console.log('cicrle', cicrle)

  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        className={`${className}bg-[#400E03] rounded-sm w-12 h-12 p-4 flex items-center justify-center absolute top-1/2 -right-12 -translate-y-1/2`}
        onClick={onClick}
      ><FiArrowRight size={20} className='text-white' /></button>
    );
  }

  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        className={`${className}bg-[#400E03] rounded-sm w-12 h-12 p-4 flex items-center justify-center absolute top-1/2 -left-16 -translate-y-1/2`}
        onClick={onClick}
      >
        <FiArrowLeft size={20} className='text-white' />
      </button>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      },

    ],
    appendDots: dots => (
      <div
        style={{
         display:'flex',
         alignItems:'center',
         justifyContent:'center'
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),

    customPaging: i => (
      <div
      className='circle'
        style={{
         
          background: '#ED1C24',
          borderRadius: '50%',
          marginTop: "49px"
        }}
      >

      </div>)

  };




  return (
    <div className='w-max-[1440px] container mx-auto px-5  lg:px-[100px]  py-[72px]'>

      <h2 className='text-start lg:text-center text-[#400e03] text-2xl lg:text-[32px] font-bold leading-normal mb-[48px]'>Featured Products</h2>

      <Slider {...settings}>
        {
          cartData.map((cart, idx) => (
            <div key={idx} className='w-full flex items-center justify-center '>

             <SliderCart cart={cart} />


            </div>


          ))
        }


      </Slider >

    </div >
  )
}

export default SliderSection