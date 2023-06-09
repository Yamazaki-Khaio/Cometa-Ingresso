import React, { FormEventHandler, useEffect, useState } from 'react';
import BotaoSalvarCartao from "./botaoSalvarCartao";
import CampoCvv from "./cartaoCvv";
import CampoNumeroCartao from "./cartaoNumero";
import CampoValidade from "./cartaoValidade";
import Image from 'next/image';
import CampoNomeCartao from './cartaoNome';
import { getSession } from 'next-auth/react';

export default function BlocoCartaoDeCredito() {

  const [id_usuario, setIdUsuario] = useState("");

  useEffect(() => {
    async function getUserId() {
      const user = await getSession();
      const userId = user?.user.id;
      setIdUsuario(userId);
    }

    getUserId();
  }, []);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try{
    const formCartao = {
      id: id_usuario,
      nCard: document.getElementById('numeroCartao').value,
      data_validade: document.getElementById('validade').value,
      cvv: document.getElementById('cvv').value,
      titular: document.getElementById('nomeCartao').value,
      }
      const res = await fetch(`/api/cardc?id_usuario=${formCartao.id}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formCartao)
      });
      window.location.reload();
    } catch(error){
      console.error("Erro ao enviar os dados:", error);
    }
  }
  
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
      <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "10px" }}>
        <CampoNomeCartao/>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <CampoNumeroCartao />
      </div>
      <div className="flex">
        <div style={{ marginRight: "23px" }}>
          <CampoCvv />
        </div>
        <div style={{ marginLeft: "23px" }}>
          <CampoValidade />
        </div>
      </div>
      <div style={{ marginBottom: "100px", marginTop: "40px" }}>
        <BotaoSalvarCartao />
      </div>
      </form>
      <div style={{ marginRight: "300px", marginTop: "-200px" }}>
        <Image src="/chip.png" alt="chip" width="50" height="50" />
      </div>
    </div>
    );
  }
