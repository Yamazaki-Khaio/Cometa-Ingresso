class User {
    private name: string;
    private age: number;
    private email: string;
  
    constructor(name: string, age: number, email: string) {
      this.name = name;
      this.age = age;
      this.email = email;
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
  }
  