import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleResultPageComponent } from './single-result-page.component';

describe('SingleResultPageComponent', () => {
  let component: SingleResultPageComponent;
  let fixture: ComponentFixture<SingleResultPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleResultPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
