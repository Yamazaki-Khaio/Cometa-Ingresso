class Localidade {
  cep: string;
  bairro: string;
  cidade: string;
  estado: string;
  constructor(cep: string, bairro: string, cidade: string, estado: string) {
    this.cep = cep;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }
}