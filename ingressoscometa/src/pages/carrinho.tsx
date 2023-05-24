import React, { useEffect, useState } from 'react'
import Layout from "@/components/layout"
import TelaCarrinho  from "@/components/Carrinho/TelaCarrinho"
import LayoutCarrinho from "@/components/Carrinho/LayoutCarrinho"
export default function Carrinho(){
    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        fetch('/api/carrinho')
          .then((response) => response.json())
          .then((data) => setCartItems(data));
      }, []);
    return (
        <div>
        <LayoutCarrinho pagina={<TelaCarrinho cartItems={cartItems}/>} exibirBotao={false} exibirBotao2={false} exibirBotao3={false} exibirBotao4={true} />
        </div>  
    )
}