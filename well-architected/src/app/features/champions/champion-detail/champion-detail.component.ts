import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'lol-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.scss']
})
export class ChampionDetailComponent implements OnInit {
  public nombreCampeon: String = '';

  constructor(private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (parametros: Params) => {
        this.nombreCampeon = parametros.nombreCampeon;
      }
    );
  }

}
