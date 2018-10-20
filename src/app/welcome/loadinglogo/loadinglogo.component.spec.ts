import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadinglogoComponent } from './loadinglogo.component';

describe('LoadinglogoComponent', () => {
  let component: LoadinglogoComponent;
  let fixture: ComponentFixture<LoadinglogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadinglogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadinglogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
