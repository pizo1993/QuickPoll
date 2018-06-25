import {Option} from './option'

export class Poll {

  private displayInfo: boolean;

  constructor(public id: number, public question: string, public options: Option[]) {
    this.displayInfo = false;
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
