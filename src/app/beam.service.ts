import { Injectable } from '@angular/core';
import { IBeamInput, IBeamOutput } from './beamInterfaces';

@Injectable()
export class BeamService {

  private beamInput: IBeamInput = {
    l: 100,
    a: 20,
    w: 100
  }

  constructor() {
    this.computeCredentials();
  }

  getInput() {
    return this.beamInput;
  }

  computeCredentials(): IBeamOutput {
    let va = (this.beamInput.w / (2 * this.beamInput.l)) *
              (Math.pow(this.beamInput.l, 2) - Math.pow(this.beamInput.a, 2)),
        vb1 = this.beamInput.w * this.beamInput.a,
        vb2 = (this.beamInput.w / (2 * this.beamInput.l)) *
              (Math.pow(this.beamInput.l, 2) + Math.pow(this.beamInput.a, 2)),
        r1 = va,
        r2 = vb1 + vb2,
        msagMax = r2 * (this.beamInput.w / (4 * this.beamInput.l)) *
              (vb2 - vb1),
        mhogMax = this.beamInput.w * Math.pow(this.beamInput.a, 2) / 2;

    return {
      va,
      vb1,
      vb2,
      r1,
      r2,
      msagMax,
      mhogMax
    }
  }

}
