import React from 'react'
import Slider from 'react-slick'
import Evento from './Evento'
import { eventos } from './GrindEvento'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ALL } from 'dns'

const settings = {
  className: "center mx-5",
  dots: false,
  infinite: true,
  centerPadding: "50px",
  speed: 2000,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  adaptiveHeight: true,
  pauseOnHover: true,
  initialSlide: 0,
  sliderWidth: 100,
  slideMargin: 100,
  
  
}

export default function DestaqueSemana(props: any) {
  return (
    <div className="relative flex-wrap justify-center items-center p-4 gap-4">
      <Slider {...settings}>
        {eventos.map((eventoDestaque, index) => (
          <div key={index} className="destaque-evento">
            <img
              src={eventoDestaque.Image}
              alt={eventoDestaque.Nome}
              className="w-[500px] h-[300px] object-cover rounded-xl border-separate border-4 border-white"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}