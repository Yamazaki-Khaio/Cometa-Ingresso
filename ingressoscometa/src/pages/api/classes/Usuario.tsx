class Usuario {
    UsuarioID: number;
    cpf_cnpj: string;
    nome: string;
    senha: string;
    data_nascimento: Date;
    tipo_user: number;
    email: string;
    endereco: Endereco;
    constructor(
      UsuarioID: number,
      cpf_cnpj: string,
      nome: string,
      senha: string,
      data_nascimento: Date,
      tipo_user: number,
      email: string,
      endereco: Endereco
    ) {
      this.UsuarioID = UsuarioID;
      this.cpf_cnpj = cpf_cnpj;
      this.nome = nome;
      this.senha = senha;
      this.data_nascimento = data_nascimento;
      this.tipo_user = tipo_user;
      this.email = email;
      this.endereco = endereco;
    }
  }
  