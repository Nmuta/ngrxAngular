import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoulderComponent } from './boulder.component';

describe('BoulderComponent', () => {
  let component: BoulderComponent;
  let fixture: ComponentFixture<BoulderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoulderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoulderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
