import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { CharacterService } from '../characters.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  character$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CharacterService
  ) { }

  ngOnInit(): void {
    this.character$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getHero(params.get('id')))
    );
  }

  goToTable(hero) {
    this.router.navigate(['/heroes']);
  }

}
