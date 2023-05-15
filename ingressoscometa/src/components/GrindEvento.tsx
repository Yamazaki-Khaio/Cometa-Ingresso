import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from 'react';
import Evento from "./Evento";
import Slider from 'react-slick';


export default function GrindEvento(props: any) {
    return (
      <div className="flex flex-wrap gap-4 justify-center items-center p-12">
        <Evento
          Nome="Justin Bieber Tour"
          Data="31/05/2000"
          Hora="20:00"
          Local="UEFS"
          Image={'Evento-Corporativo.jpg'}
        />
  
        <Evento
          Nome="Freitas Show"
          Data="20/10/2024"
          Hora="10:00"
          Local="Borogodo"
          Image={'Portico.jpg'}
        />
  
        <Evento
          Nome="Setoca - Show"
          Data="28/09/2023"
          Hora="10:00"
          Local="Cuca"
          Image={'CUCA-1.jpg'}
        />
      </div>
    );
  }