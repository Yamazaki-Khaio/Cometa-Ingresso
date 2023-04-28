class Endereco {
    private cep: string;
    private cidade: string;
    private estado: string;
    private logradouro: string;
    private bairro: string;
    private numero: number;

    constructor(cep: string, cidade: string, estado: string, logradouro: string, bairro: string, numero: number) {
        this.cep = cep;
        this.cidade = cidade;
        this.estado = estado;
        this.logradouro = logradouro;
        this.bairro = bairro;
        this.numero = numero;
    }

    getCep(): string {
        return this.cep;
    }

    getCidade(): string {
        return this.cidade;
    }

    getEstado(): string {
        return this.estado;
    }

    getLogradouro(): string {
        return this.logradouro;
    }

    getBairro(): string {
        return this.bairro;
    }

    getNumero(): number {
        return this.numero;
    }
}