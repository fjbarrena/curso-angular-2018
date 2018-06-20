import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChampionStaticData } from '../../../shared/entities/champion.static.data';
import { ChampionService } from '../../../core/champion.service';

@Component({
  selector: 'lol-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss']
})
export class ChampionsComponent implements OnInit {
  public todosLosChampions: ChampionStaticData[] = [];

  constructor(private readonly championService: ChampionService) { }

  ngOnInit() {
    this.championService.getSecuredAll().subscribe(
      (resultado: ChampionStaticData[]) => {
        console.log(resultado);
        this.todosLosChampions = resultado;
      }
    );
  }

}
