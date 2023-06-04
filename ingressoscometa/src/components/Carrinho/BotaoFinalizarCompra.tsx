import Link from "next/link";
import { useState } from "react";
import Modal from "../Modal";

export default function BotaoFinalizarCompra(){
    const [isModalVisible, setIsModalVisible] = useState(false);
    return(
       
        <div>
            <input onClick={() => setIsModalVisible(true)} 
                    type="submit" value="Finalizar Compra" className={`
                     w-48 h-12  // diminuindo o comprimento do botão
                     bg-teal-900 
                     text-white 
                     text-24 
                     rounded-3xl  // aumentando o valor do border-radius
                     transition-all duration-300  // adicionando um efeito de transição
                     hover:bg-teal-800  // adicionando uma cor de fundo quando o botão é hoverado
                     active:bg-teal-700  // adicionando uma cor de fundo quando o botão é clicado
                `} />
                {isModalVisible ? (<Modal mensagem="Deseja confirmar a compra?" onClose={() => setIsModalVisible(false)}></Modal>) : null}
        </div>
        
    )
}