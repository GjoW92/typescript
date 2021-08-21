export interface Champion {
    id: number;
    name: string;
    type: string;
    role: string;
  }

export class championClass {
  
  constructor(
  public id: number,
  public name: string,
  public type: string,
  public role: string
  ) {}
}