import CampoCpf from "./CampoCpf";
import CampoSenhaERepetirSenha from "./CampoSenhaERepetirSenha";
import RadioButton from "./RadioButton";
import CampoDataDeNascimento from "./CampoDataDeNascimento";
import CampoNomeCompleto from "./CampoNomeCompleto";
import BotaoSubmitCadastro from "./BotaoSubmitCadastro";
import { FormEventHandler, useState } from "react";
import { createHash } from 'crypto';
import CampoEmail from "./CampoEmail";
import sendEmail from "@/pages/api/email_send";
interface FormData {
  nome: string,
  cpf: string,
  data_nascimento: string,
  senha: string,
  email: string
}

function removerMascaraCpf(cpfComMascara: string): string {
  // Remove todos os caracteres que não são dígitos
  const cpfSemMascara = cpfComMascara.replace(/\D/g, '');

  return cpfSemMascara;
}

export default function CadastroUsuario() {

  const [formData, setFormData] = useState<FormData>({
    nome: "",
    cpf: "",
    data_nascimento: "2000-01-01",
    senha: "",
    email: ""
  });


  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    try {
      const hash = createHash('sha256');
      hash.update(document.getElementById('senha').value)
      const form = {
        nome: document.getElementById('nomeCompleto').value,
        cpf: removerMascaraCpf(document.getElementById('cpf').value),
        data_nascimento: document.getElementById('data').value,
        senha: hash.digest('hex'),
        email:  document.getElementById('email').value
      }

      //console.log(form.email)
      const res = await fetch('/api/usuario', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form),
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          console.log(form) //Testando se os valores estão passando
          console.log(data)
// Envie uma requisição para a API interna para enviar o e-mail de boas-vindas
        fetch('/api/email_send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: form.email }),
        })
          .then((response) => response.json())
          .then((responseData) => {
            console.log(responseData.message);
          })
          .catch((error) => {
            console.error('Erro ao enviar o e-mail de boas-vindas:', error);
          });

          window.location.replace("/login")
        });
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);

      // Lógica adicional para lidar com erros no envio dos dados
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 p-12">
      <form onSubmit={handleSubmit}>
        <CampoNomeCompleto value={formData.nome} onChange={handleInputChange} name="nome" />
        <CampoEmail value={formData.email} onChange={handleInputChange} name="email"/>
        <CampoCpf value={formData.cpf} onChange={handleInputChange} name="cpf" />
        <CampoSenhaERepetirSenha value={formData.senha} onChange={handleInputChange} name="senha" />
        <RadioButton />
        <CampoDataDeNascimento value={formData.data_nascimento} onChange={handleInputChange} name="data_nascimento" />
        <BotaoSubmitCadastro />
      </form>
    </div>
  )
}
