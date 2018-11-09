import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentChartsComponent } from './adherent-charts.component';

describe('AdherentChartsComponent', () => {
  let component: AdherentChartsComponent;
  let fixture: ComponentFixture<AdherentChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdherentChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdherentChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
