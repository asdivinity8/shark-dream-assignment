import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetInfographicComponent } from './planet-infographic.component';

describe('PlanetInfographicComponent', () => {
  let component: PlanetInfographicComponent;
  let fixture: ComponentFixture<PlanetInfographicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetInfographicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetInfographicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
