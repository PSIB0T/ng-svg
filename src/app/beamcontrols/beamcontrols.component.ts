import { Component,
         OnInit,
         Input,
         Output,
         EventEmitter } from '@angular/core';
import { IBeamInput } from './../beam.service';

@Component({
  selector: 'app-beamcontrols',
  template: `
    <span>Span of beam</span>
    <input type="range" [(ngModel)]="beamInput.l" min="0" max="200" (change)="onInputChange()">
    <span>{{beamInput.l}}</span>
    <br />
    <span>Overhang length</span>
    <input type="range" [(ngModel)]="beamInput.a" min="0" max="200" (change)="onInputChange()">
    <span>{{beamInput.a}}</span>
    <br />
    <span>Loading magnitude</span>
    <input type="range" [(ngModel)]="beamInput.w" min="0" max="200" (change)="onInputChange()">
    <span>{{beamInput.w}}</span>
    <br />
  `,
  styles: []
})
export class BeamcontrolsComponent implements OnInit {
  @Input() beamInput: IBeamInput;
  @Output() onBeamInputChange: EventEmitter<IBeamInput> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onInputChange() {
    this.onBeamInputChange.emit(this.beamInput);
  }

}
