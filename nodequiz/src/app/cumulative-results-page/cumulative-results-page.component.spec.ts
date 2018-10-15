import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CumulativeResultsPageComponent } from './cumulative-results-page.component';

describe('CumulativeResultsPageComponent', () => {
  let component: CumulativeResultsPageComponent;
  let fixture: ComponentFixture<CumulativeResultsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CumulativeResultsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CumulativeResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
