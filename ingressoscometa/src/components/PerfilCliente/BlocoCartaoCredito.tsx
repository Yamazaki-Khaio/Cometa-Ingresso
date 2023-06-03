import React, { useState } from 'react';
import BotaoSalvarCartao from "./botaoSalvarCartao";
import Campocvv from "./cartaoCvv";
import CampoNumeroCartao from "./cartaoNumero";
import CampoValidade from "./cartaoValidade";
import Image from 'next/image';

export default function BlocoCartaoDeCredito() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const getBackgroundColor = () => {
    if (hovered) {
      return 'linear-gradient(45deg, #1f9d78, #14b59f)';
    }
    return 'linear-gradient(45deg, #14b59f, #1f9d78)';
  };

  const getBoxShadow = () => {
    if (hovered) {
      return "10px 10px 8px rgba(0, 0, 0, 0.3)";
    }
    return "10px 10px 4px rgba(0, 0, 0, 0.2)";
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-96 h-60 mx-auto relative"
      style={{
        marginTop: "-100vh",
        right: "23vh",
        fontWeight: "bold",
        borderRadius: "30px",
        boxShadow: getBoxShadow(),
        background: getBackgroundColor(),
        transition: "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
            <div><CampoNumeroCartao/></div>
      <div><Campocvv /></div>
      <div><CampoValidade /></div>
      <div><BotaoSalvarCartao /></div>
      <div style={{ marginRight: "300px", marginTop: "-90px" }}>
        <Image src="/chip.png" alt="chip" width="50" height="50" />
      </div>

    </div>
  );
}
