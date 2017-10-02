import { Injectable } from '@angular/core';

@Injectable()
export class BeamService {

  private circle: ICircle = {
    x: 50,
    y: 50,
    r: 100
  }

  constructor() { }

  getCircle(): ICircle {
    return this.circle;
  }

}

export interface ICircle {
  x: number;
  y: number;
  r: number;
}
