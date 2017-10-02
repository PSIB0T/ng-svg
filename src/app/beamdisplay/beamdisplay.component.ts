import { Component, OnInit, Input } from '@angular/core';
import { IBeamInput, IBeamOutput } from './../beamInterfaces';

@Component({
  selector: 'app-beamdisplay',
  template: `
    <div>
      <svg width="500" height="500">
        <defs>
          <marker id="arrowEnd" markerWidth="15" markerHeight="15" refX="0" refY="3" orient="auto" markerUnits="strokeWidth"
          viewBox="0 0 20 20">
            <path d="M0,0 L0,6 L5,3 z" fill="#000" />
          </marker>
        </defs>
        <defs>
          <marker id="arrowStart" markerWidth="15" markerHeight="15" refX="0" refY="3" orient="auto" markerUnits="strokeWidth"
          viewBox="0 0 20 20">
            <path d="M0,3 L5,0 L5,6  z" fill="#000" />
          </marker>
        </defs>
        <svg:g>
          <svg:text [attr.x]="startingX + (beamInput.l)/3" [attr.y]="startingY" font-size="15">{{beamInput.l}}</svg:text>
          
          <svg:line [attr.x1]="startingX" [attr.y1]="startingPointY(10)" 
          [attr.x2]="startingPointX(beamInput.l)" [attr.y2]="startingPointY(10)" stroke="#000" stroke-width="2" 
          marker-end="url(#arrowEnd)"
          marker-start="url(#arrowStart)">
          </svg:line>
          
          <svg:rect [attr.width]="beamInput.l"
          [attr.x] = "startingX" 
          [attr.y] = "startingY + 20" 
          [attr.height]="20"
          style="fill:rgb(0,0,255);stroke:rgb(0,0,0)"></svg:rect>

          <svg:text [attr.x]="startingPointX(beamInput.l + (beamInput.a/3))" [attr.y]="startingPointY(0)" 
          font-size="15">{{beamInput.a}}</svg:text>

          <svg:line [attr.x1]="startingPointX(beamInput.l + 1)" [attr.y1]="startingPointY(10)" 
          [attr.x2]="startingPointX(beamInput.l + beamInput.a)" 
          [attr.y2]="startingY + 10" stroke="#000" stroke-width="2" marker-end="url(#arrowEnd)"
          marker-start="url(#arrowStart)">
          </svg:line>
          <svg:rect [attr.width]="beamInput.a"
          [attr.x] = "startingPointX(beamInput.l)" 
          [attr.y] = "startingPointY(20)"
          [attr.height]="20"
          style="fill:rgb(255, 0, 0);stroke:rgb(0,0,0)"></svg:rect>
        </svg:g>
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

  startingX = 0;
  startingY = 30;

  constructor() { }

  ngOnInit() {
    // this.beamOutput.
  }

  startingPointX(xValue) {
    return this.startingX + xValue;
  }

  startingPointY(yValue) {
    return this.startingY + yValue;
  }

}
