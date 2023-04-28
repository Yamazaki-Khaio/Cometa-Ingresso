class Compra {
  id_compra: number;
  id_carrinho: number;
  data_compra: Date;
  constructor(id_compra: number, id_carrinho: number, data_compra: Date) {
    this.id_compra = id_compra;
    this.id_carrinho = id_carrinho;
    this.data_compra = data_compra;
  }
}
