class Endereco {
    id_endereco: number;
    cep: string;
    rua: string;
    numero: string;
    complemento: string;
    UsuarioID: number;
    localidade: Localidade;
   
   
    constructor(
      id_endereco: number,
      cep: string,
      rua: string,
      numero: string,
      complemento: string,
      UsuarioID: number,
      localidade: Localidade
    ) {
      this.id_endereco = id_endereco;
      this.cep = cep;
      this.rua = rua;
      this.numero = numero;
      this.complemento = complemento;
      this.UsuarioID = UsuarioID;
      this.localidade = localidade;
    }
  }