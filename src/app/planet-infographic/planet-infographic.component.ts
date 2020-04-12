import { Component, OnInit } from '@angular/core';
import { PLANETS } from '../planet-mock';

@Component({
  selector: 'app-infographic',
  templateUrl: './planet-infographic.component.html',
  styleUrls: ['./planet-infographic.component.css']
})
export class PlanetInfographicComponent implements OnInit {

  planetData = PLANETS;
  constructor() { }

  ngOnInit(): void {
  }

}
