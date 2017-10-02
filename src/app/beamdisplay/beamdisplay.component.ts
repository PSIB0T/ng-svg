import { Component, OnInit, Input } from '@angular/core';
import { IBeamInput, IBeamOutput } from './../beamInterfaces';

@Component({
  selector: 'app-beamdisplay',
  template: `
    <div>
      <svg width="500" height="500">
        
      </svg>
      <p>R1 is : {{beamOutput.r1 | number:'1.1-2'}}</p>
      <p>R2 is : {{beamOutput.r2 | number:'1.1-2'}}</p>
      <p>va is : {{beamOutput.va | number:'1.1-2'}}</p>
      <p>vb1 is : {{beamOutput.vb1 | number:'1.1-2'}}</p>
      <p>vb2 is : {{beamOutput.vb2 | number:'1.1-2'}}</p>
    </div>
  `,
  styles: []
})
export class BeamdisplayComponent implements OnInit {
  @Input() beamInput: IBeamInput;
  @Input() beamOutput: IBeamOutput;

  constructor() { }

  ngOnInit() {
    // this.beamOutput.
  }

}
