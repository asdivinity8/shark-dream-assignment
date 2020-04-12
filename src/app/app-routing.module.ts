import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfographicComponent } from './hero-infographic/infographic.component';
import { PlanetInfographicComponent } from './planet-infographic/planet-infographic.component';

const routes: Routes = [
  { path: 'hero-infoGraphic', component: InfographicComponent },
  { path: 'planet-infoGraphic', component: PlanetInfographicComponent },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
