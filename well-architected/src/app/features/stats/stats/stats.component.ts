import { Component, OnInit, ViewChild } from '@angular/core';
import { Tournament } from '../../../shared/entities/tournament';
import { Dialog } from 'primeng/dialog';
import { DateUtils } from '../../../shared/util/DateUtils';

@Component({
  selector: 'lol-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  private tournaments: Tournament[] = [];

  private newTournament: Tournament = new Tournament();

  private _title: String = '';

  set title(obj: String) {
    this._title = obj;

    console.log(this._title);
  }

  private validationFormError: String = '';

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

  public submit() {
    if (this.newTournament.isValid()) {
      this.validationFormError = '';

      // Procesar y hacer un post!
    } else {
      this.validationFormError = 'Error de validación en el formulario';
    }
  }

  public showModal() {
    this.display = true;
  }

}
