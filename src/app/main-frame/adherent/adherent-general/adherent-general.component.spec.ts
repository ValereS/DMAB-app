import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentGeneralComponent } from './adherent-general.component';

describe('AdherentDetailsComponent', () => {
  let component: AdherentGeneralComponent;
  let fixture: ComponentFixture<AdherentGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdherentGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdherentGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
