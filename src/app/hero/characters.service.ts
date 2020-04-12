import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CHARACTERS } from './characters-mock';

@Injectable({
    providedIn: 'root',
})
export class CharacterService {

    getHeroes(): Observable<any> {
        return of(CHARACTERS);
    }

    getHero(id: number | string) {
        console.log(id);
        console.log(this.getHeroes());
        return this.getHeroes().pipe(
            // (+) before `id` turns the string into a number
            map((heroes) => heroes.find(hero => hero.id === id))
        );
    }
}