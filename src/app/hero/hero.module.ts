import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { TableComponent } from './table/table.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { HeroRoutingModule } from './hero-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    TableComponent,
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
  ]
})
export class HeroModule { }
