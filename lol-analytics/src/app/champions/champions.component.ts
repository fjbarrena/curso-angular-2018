import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'lol-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss']
})
export class ChampionsComponent implements OnInit {
  public todosLosChampions: any = [];

  constructor(private readonly http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/champ-static-data').subscribe(
      (resultado) => {
        console.log(resultado);
        this.todosLosChampions = resultado;
      }
    );
  }

}
