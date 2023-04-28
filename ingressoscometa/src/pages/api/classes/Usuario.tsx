class User {
  private name: string;
  private age: number;
  private email: string;
  private senha: string;

  constructor(name: string, age: number, email: string, senha: string) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.senha = senha;
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  public getEmail(): string {
    return this.email;
  }

  public getSenha(): string{
    return this.senha;
  }

  public login(loginAtual: string, senhaAtual: string){
    var logado:boolean = false;

    if (loginAtual == this.email){
      if(senhaAtual == this.senha){
        logado = true;
      }
    }

    return logado;
  }

}
