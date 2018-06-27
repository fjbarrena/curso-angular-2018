import { Component, OnInit, ViewChild } from '@angular/core';
import { Tournament } from '../../../shared/entities/tournament';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'lol-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  private tournaments: Tournament[] = [];

  display: boolean = false;

  @ViewChild('myDialog')
  private miModal: Dialog;

  constructor() {
    const t = new Tournament();
    t.title = 'Torneo del LoL del ITI';
    t.startDate = new Date(2018, 5, 1);
    t.endDate = new Date(2018, 5, 30);
    t.events = [];

    this.tournaments.push(t);
  }

  ngOnInit() {
  }

  public showModal() {
    this.display = true;
  }

}
