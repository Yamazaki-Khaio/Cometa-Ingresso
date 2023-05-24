import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
};

export default function DestaqueSemana(props: any) {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetchEventosDestaque();
  }, []);

  const fetchEventosDestaque = async () => {
    try {
      const response = await axios.get('/api/evento');
      setEventos(response.data);
    } catch (error) {
      console.error('Erro ao buscar eventos de destaque:', error);
    }
  };

  return (
    <div className="relative flex-wrap justify-center items-center p-4 gap-4">
      <Slider {...settings}>
        {eventos.map((eventoDestaque: any, index: number) => (
          <div key={index} className="destaque-evento">
            <img
              src={eventoDestaque.imagem}
              alt={eventoDestaque.nome_evento}
              className="w-[500px] h-[300px] object-cover rounded-xl border-separate border-4 border-white"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
