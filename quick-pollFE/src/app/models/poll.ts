import {Option} from './option'
import { User } from './user';

export class Poll {

  private displayInfo: boolean;
  public id: number;
  public idCreator: User;
  public question: string; 
  public options: Option[];
  
  constructor() {
    this.displayInfo = false;
    let optionsArray = this.options;
    optionsArray.forEach((o, index) =>  {
      this.options[index] = new Option(o.id, o.value);
    })
  }

  public setInfo() {
    if (this.getInfo()==true) {
      this.displayInfo=false;
    } else {
      this.displayInfo=true;
    }
  }

  public getInfo() {
    return this.displayInfo;
  }



}
