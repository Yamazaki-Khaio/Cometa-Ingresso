import React, { useEffect, useState } from 'react'
import Layout from "@/components/CabecalhoCadastro/layout"
import TelaCarrinho from "@/components/Carrinho/TelaCarrinho"
import LayoutCarrinho from "@/components/Carrinho/LayoutCarrinho"
import ListaEventosCarrinho from '@/components/Carrinho/ListaEventosCarrinho'
export default function Carrinho() {
    return (
        <div>
            <LayoutCarrinho pagina={<ListaEventosCarrinho/>} exibirBotao={false} exibirBotao2={false} exibirBotao3={false} exibirBotao4={true} />
        </div>
    )
}