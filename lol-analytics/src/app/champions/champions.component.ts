import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChampionService } from './champion.service';
import { ChampionStaticData } from './champion.static.data';

@Component({
  selector: 'lol-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss']
})
export class ChampionsComponent implements OnInit {
  public todosLosChampions: ChampionStaticData[] = [];

  constructor(private readonly championService: ChampionService) { }

  ngOnInit() {
    this.championService.getAll().subscribe(
      (resultado: ChampionStaticData[]) => {
        console.log(resultado);
        this.todosLosChampions = resultado;
      }
    );
  }

}
