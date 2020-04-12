import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableComponent} from './table/table.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

const heroRoutes: Routes = [
  {path:'heroes', component: TableComponent},
  { path: 'character/:id', component: CharacterDetailComponent },

];

@NgModule({
  imports: [RouterModule.forChild(heroRoutes)],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
