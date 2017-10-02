import { Component,
         OnInit,
         Input,
         Output,
         EventEmitter } from '@angular/core';
import { ICircle } from './../beam.service';

@Component({
  selector: 'app-beamcontrols',
  template: `
    <input type="range" [(ngModel)]="circle.x" min="0" max="200"><span>{{circle.x}}</span><br />
    <input type="range" [(ngModel)]="circle.y" min="0" max="200"><span>{{circle.y}}</span><br />
    <input type="range" [(ngModel)]="circle.r" min="0" max="200" (change)="radiusChange()"><span>{{circle.r}}</span><br />
  `,
  styles: []
})
export class BeamcontrolsComponent implements OnInit {
  @Input() circle: ICircle;
  @Output() emitRadius: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  radiusChange() {
    this.emitRadius.emit(this.circle.r)
  }

}
