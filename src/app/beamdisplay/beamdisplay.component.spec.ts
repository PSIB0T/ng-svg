import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeamdisplayComponent } from './beamdisplay.component';

describe('BeamdisplayComponent', () => {
  let component: BeamdisplayComponent;
  let fixture: ComponentFixture<BeamdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeamdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeamdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
