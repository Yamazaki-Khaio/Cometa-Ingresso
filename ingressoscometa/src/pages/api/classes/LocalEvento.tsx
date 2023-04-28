class LocalEvento {
  id_local_evento: number;
  nome_local: string;
  localidade: Localidade;
  constructor(
    id_local_evento: number,
    nome_local: string,
    localidade: Localidade
  ) {
    this.id_local_evento = id_local_evento;
    this.nome_local = nome_local;
    this.localidade = localidade;
  }
}