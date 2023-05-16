class Evento{
    id: number;
    idUser: number;
    idLocal: number;
    nome: string;
    data: Date;
    descricao: string;
    ativado: boolean;
    imagem: BinaryData;

    constructor(
        idEvento: number, 
        idUser: number,
        idLocal: number,
        nome: string, 
        data: Date,
        descricao: string,
        imagem: BinaryData
    ){
        this.id = idEvento;
        this.idUser = idUser;
        this.idLocal = idLocal;
        this.nome = nome;
        this.data = data;
        this.descricao = descricao;
        this.ativado = true;
        this.imagem = imagem;
    }
}
export default Evento;