import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetChartComponentComponent } from './planet-chart-component.component';

describe('PlanetChartComponentComponent', () => {
  let component: PlanetChartComponentComponent;
  let fixture: ComponentFixture<PlanetChartComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetChartComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetChartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
