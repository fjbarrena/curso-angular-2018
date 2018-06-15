import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'lol-dashboard-invocador',
  templateUrl: './dashboard-invocador.component.html',
  styleUrls: ['./dashboard-invocador.component.scss']
})
export class DashboardInvocadorComponent implements OnInit {

  constructor(private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (data) => {
        console.log(data);
        console.log(data.nombreInvocador);
      }
    )
  }

}
