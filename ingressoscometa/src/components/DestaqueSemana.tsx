import React from 'react'
import Slider from 'react-slick'
import Evento from './Evento'
import { eventos } from './GrindEvento'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  className: "center",
  dots: false,
  infinite: true,
  centerPadding: "60px",
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  adaptiveHeight: true,
  pauseOnHover: true,

  
}

export default function DestaqueSemana(props: any) {
  return (
    <div className="relative flex-wrap gap-5 justify-center items-center p-4">
      <Slider {...settings}>
        {eventos.map((eventoDestaque, index) => (
            <div key={index} className="destaque-evento">
          <Evento
            key={index}
            Nome={eventoDestaque.Nome}
            Data={eventoDestaque.Data}
            Hora={eventoDestaque.Hora}
            Local={eventoDestaque.Local}
            Image={eventoDestaque.Image}
            className="w-full h-full"
          />
          </div>
        ))}
      </Slider>
    </div>
  )
}
