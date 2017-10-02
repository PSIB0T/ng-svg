import { Component, OnInit, Input } from '@angular/core';
import { ICircle } from './../beam.service' ;

@Component({
  selector: 'app-beamdisplay',
  template: `
    <div>
      <svg width="500" height="500">
        <svg:circle [attr.cx]="circle.x" [attr.cy]="circle.y" [attr.r]="circle.r"></svg:circle>
      </svg>
      <h1>Area is : {{area | number:'5.1-2'}}</h1>
    </div>
  `,
  styles: []
})
export class BeamdisplayComponent implements OnInit {
  @Input() circle: ICircle;
  @Input() area: number;

  constructor() { }

  ngOnInit() {
  }

}
