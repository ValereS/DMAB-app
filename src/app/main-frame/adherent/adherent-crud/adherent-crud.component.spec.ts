import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentCRUDComponent } from './adherent-crud.component';

describe('AdherentCRUDComponent', () => {
  let component: AdherentCRUDComponent;
  let fixture: ComponentFixture<AdherentCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdherentCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdherentCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
