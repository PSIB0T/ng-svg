import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeamcontrolsComponent } from './beamcontrols.component';

describe('BeamcontrolsComponent', () => {
  let component: BeamcontrolsComponent;
  let fixture: ComponentFixture<BeamcontrolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeamcontrolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeamcontrolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
