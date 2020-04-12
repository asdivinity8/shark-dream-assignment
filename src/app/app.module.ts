import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfographicComponent } from './hero-infographic/infographic.component';
import { HeroModule } from './hero/hero.module';
import { ChartComponentComponent } from './hero-chart-component/chart-component.component';
import { PlanetChartComponentComponent } from './planet-chart-component/planet-chart-component.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetInfographicComponent } from './planet-infographic/planet-infographic.component'; 

@NgModule({
  declarations: [
    AppComponent,
    InfographicComponent,
    ChartComponentComponent,
    PlanetChartComponentComponent,
    PlanetInfographicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeroModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
