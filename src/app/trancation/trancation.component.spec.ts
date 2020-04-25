import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrancationComponent } from './trancation.component';

describe('TrancationComponent', () => {
  let component: TrancationComponent;
  let fixture: ComponentFixture<TrancationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrancationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrancationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
