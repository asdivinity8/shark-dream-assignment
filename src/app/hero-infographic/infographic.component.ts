import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../hero/characters.service';
import { PLANETS } from '../planet-mock';

@Component({
  selector: 'app-infographic',
  templateUrl: './infographic.component.html',
  styleUrls: ['./infographic.component.css']
})
export class InfographicComponent implements OnInit {
  characters = [];
  films = [];
  filmChartData = [];
  planetData = PLANETS;
  constructor(private HeroService: CharacterService) { }

  ngOnInit(): void {
    this.getCharacters();
    this.getFilmData();
  }

  getCharacters() {
    this.HeroService.getHeroes()
      .subscribe(heroes => this.characters = heroes);
  }

  distinct(value, index, self): any {
    return self.indexOf(value) === index;
  }

  getFilmData(): any {
    this.characters.forEach(hero => {
      if (hero.films) {
        this.films = this.films.concat(hero.films);
      }
    });
    let distinctFilms = this.films.filter(this.distinct);
    let filmData = {};
    distinctFilms.forEach(film => {
      filmData = {};
      let charCount = 0;
      this.characters.forEach(hero => {
        if (hero.films.includes(film)) {
          ++charCount;
        }
      });
      filmData['film'] = film.split(': ')[1];
      filmData['characters'] = charCount;
      this.filmChartData.push(filmData);
    });
    console.log(this.filmChartData);
  }

}
