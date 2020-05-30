import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityStateComponentComponent } from './city-state-component.component';

describe('CityStateComponentComponent', () => {
  let component: CityStateComponentComponent;
  let fixture: ComponentFixture<CityStateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityStateComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityStateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
