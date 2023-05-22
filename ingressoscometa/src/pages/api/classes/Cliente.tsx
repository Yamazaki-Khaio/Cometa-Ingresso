import Usuario from "./Usuario";
import Endereco from "./Endereco";
class Cliente extends Usuario {
    

    constructor(
        idUser: number,
        cpf: string,
        nome: string,
        senha: string,
        data_nascimento: Date,
        tipo_user: number,
        email: string,
        endereco: Endereco,
        telefone: number) {
        super(idUser, cpf, nome, senha, data_nascimento, tipo_user, email,endereco, telefone );
        
        //this.carrinhoDeCompras = new Carrinho();
        //this.compras = [];
        
    }

    cadastro(nome: string, email: string, senha: string, telefone: number, endereco: Endereco, cpf: number, cartaoDeCredito: string) {
        super.editarCadastro(nome, 1);
        super.editarCadastro(email, 2);
        super.editarCadastro(String(telefone), 3);
        //super.editarCadastro(endereco, 4);
        super.editarCadastro(String(cpf), 5);
        
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