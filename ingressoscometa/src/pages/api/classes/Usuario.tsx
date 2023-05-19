class Usuario {
    idUser: number;
    cpf: string;
    nome: string;
    senha: string;
    data_nascimento: Date;
    tipo_user: number;
    email: string;
    endereco: Endereco;
    telefone: number;
    constructor(
      idUser: number,
      cpf: string,
      nome: string,
      senha: string,
      data_nascimento: Date,
      tipo_user: number,
      email: string,
      endereco: Endereco,
      telefone: number
    ) {
      this.idUser = idUser;
      this.cpf = cpf;
      this.nome = nome;
      this.senha = senha;
      this.data_nascimento = data_nascimento;
      this.tipo_user = tipo_user;
      this.email = email;
      this.endereco = endereco;
      this.telefone = telefone;
    }

  }
  export default Usuario;