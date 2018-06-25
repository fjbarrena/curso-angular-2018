import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../../../core/champion.service';
import { TimelineEvent } from '../../../shared/entities/timeline-event';

@Component({
  selector: 'lol-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  startDate = new Date(2018, 5, 22);
  endDate = new Date(2018, 5, 30);
  events = [];

  constructor(private readonly championService: ChampionService) { 
    const tevent = new TimelineEvent();

    tevent.eventDate = new Date(2018, 5, 25);
    tevent.description = 'Descripcion del evento';
    tevent.eventType = 1;
    tevent.title = 'Título del evento';

    this.events.push(tevent);

    const tevent2 = new TimelineEvent();

    tevent2.eventDate = new Date(2018, 5, 22);
    tevent2.description = 'inicio del torneo';
    tevent2.eventType = 1;
    tevent2.title = 'Inicio del Torneo';

    this.events.push(tevent2);

    const tevent3 = new TimelineEvent();

    tevent3.eventDate = new Date(2018, 5, 30);
    tevent3.description = 'fin del torneo';
    tevent3.eventType = 1;
    tevent3.title = 'Fin del Torneo';

    this.events.push(tevent3);
  }



  ngOnInit() {
    this.championService.getAll().subscribe(
      (amigo) => {
        console.log('Hemos obtenido todos los campeones pero no los mostramos :D');
      }
    );
  }

}
