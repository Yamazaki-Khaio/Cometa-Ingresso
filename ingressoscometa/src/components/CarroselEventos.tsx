import React from 'react';
import Slider, { Settings } from 'react-slick';
import Evento from './Evento';

export default function CarroselEventos(props: any) {
    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "20%",
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1368,
            settings: {
              centerPadding: "10%",
            },
          },
        ],
      };
  
    return (
      <Slider {...settings}>
        <Evento
          Nome="Justin Bieber Tour"
          Data="31/05/2000"
          Hora="20:00"
          Local="UEFS"
          Image={"Evento-Corporativo.jpg"}
          className="w-1359px h-500px"  
        />
  
        <Evento
          Nome="Freitas Show"
          Data="20/10/2024"
          Hora="10:00"
          Local="Borogodo"
          Image={"Portico.jpg"}
          className="w-1359px h-500px"  
        />
  
        <Evento
          Nome="Setoca - Show"
          Data="28/09/2023"
          Hora="10:00"
          Local="Cuca"
          Image={"CUCA-1.jpg"}
          className="w-1359px h-500px"  
        />
      </Slider>
    );
  }
  