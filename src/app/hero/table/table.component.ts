
import { CHARACTERS } from "../characters-mock";
import { CharacterService } from '../characters.service';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  constructor(private HeroService:CharacterService){}
  characters = [];
  displayedColumns: string[] = ['id', 'name'];
  dataSource:MatTableDataSource<any> ;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  ngOnInit() {
    this.getCharacters();
    this.dataSource = new MatTableDataSource(this.characters);
    this.dataSource.paginator = this.paginator;
  }

  getCharacters(){
    this.HeroService.getHeroes()
    .subscribe(heroes => this.characters = heroes);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
