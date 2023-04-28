class Usuario {
  private nome: string;
  private email: string;
  private senha: string;
  private telefone: number;
  private endereco: Endereco;
  private cpf: number;
  private tipoUsuario: number;

  constructor(nome: string, email: string, senha: string, telefone: number, endereco: Endereco, cpf: number, tipoUsuario: number) {
      this.nome = nome;
      this.email = email;
      this.senha = senha;
      this.telefone = telefone;
      this.endereco = endereco;
      this.cpf = cpf;
      this.tipoUsuario = tipoUsuario;
  }

  getNome(): string {
      return this.nome;
  }

  getEmail(): string {
      return this.email;
  }

  getSenha(): string {
      return this.senha;
  }

  getTelefone(): number {
      return this.telefone;
  }

  getEndereco(): Endereco {
      return this.endereco;
  }

  getCpf(): number {
      return this.cpf;
  }

  getTipoUsuario(): number {
      return this.tipoUsuario;
  }

  editarCadastro(dado: string, tipoDado: number) {
      switch (tipoDado) {
          case 1:
              this.nome = dado;
              break;
          case 2:
              this.email = dado;
              break;
          case 3:
              this.telefone = Number(dado);
              break;
          case 4:
              //this.endereco = dado;
              break;
          case 5:
              this.cpf = Number(dado);
              break;
          case 6:
              this.tipoUsuario = Number(dado);
              break;
          default:
              console.log("Tipo de dado inválido.");
      }
  }

  fazerLogin(email: string, senha: string) {
      if (email === this.email && senha === this.senha) {
          console.log("Login realizado com sucesso!");
      } else {
          console.log("E-mail ou senha inválidos.");
      }
  }

  editarSenha(senha: string) {
      this.senha = senha;
      console.log("Senha editada com sucesso!");
  }
}