class Evento{
    idEvento: string;
    nome: string;
    //promotorAssociado: Promotor;
    descricao: string;
    data: Date;
    local: string;
    //ingressos: Ingresso[];
    quantiaIngressosPorSetor: number[];
    setores: string[];

    constructor(
        idEvento: string, 
        nome: string, 
        descricao: string, 
        data: Date, 
        local: string, 
        quantiaIngressosPorSetor: number[], 
        setores: string[]
    ){
        this.idEvento = idEvento;
        this.nome = nome;
        this.descricao = descricao;
        this.data = data;
        this.local = local;
        this.quantiaIngressosPorSetor = quantiaIngressosPorSetor;
        this.setores = setores;
    }
}