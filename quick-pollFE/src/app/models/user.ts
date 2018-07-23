
export class User {
    id: number;
    password: string;
    username: string;
    fullName: string;
    role: string;
    pollsId: number[];
  
    public sayHello () {
      console.log("Ciao, sono: " + this.fullName);      
    }
   
}
