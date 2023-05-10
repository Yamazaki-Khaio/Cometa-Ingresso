class Evento{
    idEvento: number;
    nome: string;
    descricao: string;
    data: Date;
    idLocal: number;
    cpfPromotor: string;
    idUser: number;
    idSetor: number;
    idTipo: number;

    constructor(
        idEvento: number, 
        nome: string, 
        data: Date,
        descricao: string, 
        idLocal: number,
        cpfPromotor: string, 
        idUser: number,
        idSetor: number,
        idTipo: number,
    ){
        this.idEvento = idEvento;
        this.nome = nome;
        this.data = data;
        this.descricao = descricao;
        this.idLocal = idLocal;
        this.cpfPromotor = cpfPromotor;
        this.idUser = idUser;
        this.idSetor = idSetor;
        this.idTipo = idTipo;
    }
}
export default Evento;