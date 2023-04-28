class Cliente extends Usuario {
    private cartaoDeCredito: string;
    //private carrinhoDeCompras: Carrinho;
    //private compras: Compra[];
    private creditoEstorno: number;

    constructor(nome: string, email: string, senha: string, telefone: number, endereco: Endereco, cpf: number, tipoUsuario: number, cartaoDeCredito: string) {
        super(nome, email, senha, telefone, endereco, cpf, tipoUsuario);
        this.cartaoDeCredito = cartaoDeCredito;
        //this.carrinhoDeCompras = new Carrinho();
        //this.compras = [];
        this.creditoEstorno = 0;
    }

    cadastro(nome: string, email: string, senha: string, telefone: number, endereco: Endereco, cpf: number, cartaoDeCredito: string) {
        super.editarCadastro(nome, 1);
        super.editarCadastro(email, 2);
        super.editarCadastro(String(telefone), 3);
        //super.editarCadastro(endereco, 4);
        super.editarCadastro(String(cpf), 5);
        this.cartaoDeCredito = cartaoDeCredito;
    }

    //adicionarAoCarrinho(item: Item) {
        //this.carrinhoDeCompras.adicionarItem(item);
    //}

    //removerDoCarrinho(item: Item) {
        //this.carrinhoDeCompras.removerItem(item);
    //}

    //realizarCompra() {
       // let compra = new Compra(this.carrinhoDeCompras, this.cartaoDeCredito);
        //this.compras.push(compra);
        //this.carrinhoDeCompras = new Carrinho();
    //}

    //estornarCompra(compra: Compra) {
        //let valorCompra = compra.getValorTotal();
        //this.creditoEstorno += valorCompra;
        //console.log(`Compra no valor de R$${valorCompra} estornada com sucesso!`);
    //}
}