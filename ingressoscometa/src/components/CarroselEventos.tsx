import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Evento from './Evento';

export default function CarroselEventos(props: any) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Definindo para exibir apenas um slide por vez
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "2%",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1368,
        settings: {
          centerPadding: "2%",
        },
      },
    ],
  };

  return (
    <div className='w-full mx-auto'>
      <Slider {...settings}>
          <Evento
            Nome="Justin Bieber Tour"
            Data="31/05/2000"
            Hora="20:00"
            Local="UEFS"
            Image="Evento-Corporativo.jpg"
            imageSizeClass="w-full h-auto" // Adicione a classe de tamanho da imagem
          />
       


          <Evento
            Nome="Freitas Show"
            Data="20/10/2024"
            Hora="10:00"
            Local="Borogodo"
            Image="Portico.jpg"
            imageSizeClass="w-full h-auto" // Adicione a classe de tamanho da imagem
          />
     

          <Evento
            Nome="Setoca - Show"
            Data="28/09/2023"
            Hora="10:00"
            Local="Cuca"
            Image="CUCA-1.jpg"
            imageSizeClass="w-full h-auto" // Adicione a classe de tamanho da imagem
          />
        
      </Slider>
    </div>
  );
}
