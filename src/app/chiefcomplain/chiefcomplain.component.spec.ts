import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiefcomplainComponent } from './chiefcomplain.component';

describe('ChiefcomplainComponent', () => {
  let component: ChiefcomplainComponent;
  let fixture: ComponentFixture<ChiefcomplainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiefcomplainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiefcomplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
