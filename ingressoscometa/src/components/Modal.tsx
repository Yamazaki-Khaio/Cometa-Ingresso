import React from "react";
import BotaoCancelar from "./EsqueceuERedefinirSenha/BotaoCancelar";
import BotaoConfirmarCompra from "./FinalizarCompra/BotaoConfirmarCompra";

interface ModalProps {
  mensagem: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ mensagem, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-75 bg-gray-900">
      <div className="bg-white rounded-lg w-570 h-254 p-4">
        <p className="text-lg font-bold text-center">{mensagem}</p>
        <div className="flex p-4">
          <BotaoCancelar href="carrinho" onClick={onClose} />
          <BotaoConfirmarCompra href="qrcode" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
