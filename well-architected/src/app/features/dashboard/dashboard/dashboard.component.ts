import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../../../core/champion.service';

@Component({
  selector: 'lol-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private readonly championService: ChampionService) { }

  ngOnInit() {
    this.championService.getAll().subscribe(
      (amigo) => {
        console.log('Hemos obtenido todos los campeones pero no los mostramos :D');
      }
    )
  }

}
