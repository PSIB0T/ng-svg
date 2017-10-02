import { Component, OnInit } from '@angular/core';
import { BeamService } from './../beam.service';
import { IBeamInput, IBeamOutput } from './../beamInterfaces';

@Component({
  selector: 'app-beam',
  template: `
    <app-beamcontrols [beamInput]="beamInput" (onBeamInputChange)="recomputeCredentials($event)">
    </app-beamcontrols>
    <app-beamdisplay [beamInput]="beamInput" [beamOutput]="beamOutput"></app-beamdisplay>
  `,
  styles: []
})
export class BeamComponent implements OnInit {

  private beamInput: IBeamInput;
  private beamOutput: IBeamOutput;
  constructor(private _beamService: BeamService) { }

  ngOnInit() {
    this.beamInput = this._beamService.getInput();
    this.beamOutput = this._beamService.computeCredentials();
  }

  recomputeCredentials() {
    this.beamOutput = this._beamService.computeCredentials();
  }

}
