import { Component, OnInit } from '@angular/core';
import { BeamService, ICircle } from './../beam.service';

@Component({
  selector: 'app-beam',
  template: `
    <app-beamcontrols [circle]="circle" (emitRadius)="computeArea($event)"></app-beamcontrols>
    <app-beamdisplay [circle]="circle" [area]="area"></app-beamdisplay>
  `,
  styles: []
})
export class BeamComponent implements OnInit {

  private circle: ICircle;
  private area: number;
  constructor(private _beamService: BeamService) { }

  ngOnInit() {
    this.circle = this._beamService.getCircle();
    this.computeArea(this.circle.r);
  }

  computeArea(radius: number) {
    this.area = Math.PI * Math.pow(radius, 2);
  }

}
