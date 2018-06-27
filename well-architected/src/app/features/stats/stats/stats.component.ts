import { Component, OnInit, ViewChild } from '@angular/core';
import { Tournament } from '../../../shared/entities/tournament';
import { Dialog } from 'primeng/dialog';
import { DateUtils } from '../../../shared/util/DateUtils';
import { TournamentService } from '../../../core/tournament.service';
import { TimelineEvent } from '../../../shared/entities/timeline-event';

@Component({
  selector: 'lol-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  private tournaments: Tournament[] = [];
counter = 0;
  private newTournament: Tournament = new Tournament();
  private selectedTournament: Tournament;

  private newTimelineEvent: TimelineEvent = new TimelineEvent();

  private _title: String = '';
  private _startDate: Date;
  private _endDate: Date;

  private titleValidationSuccess = true;
  private showWorkArea = false;

  set title(obj: string) {
    this._title = obj;
    this.newTournament.title = obj;

    if (this._title.length > 100) {
      this.titleValidationSuccess = false;
    } else {
      this.titleValidationSuccess = true;
    }

    console.log(this._title);
  }

  set startDate(obj: Date) {
    this._startDate = obj;
    this.newTournament.startDate = obj;
    console.log(this._startDate);
  }

  set endDate(obj: Date) {
    this._endDate = obj;
    this.newTournament.endDate = obj;
    console.log(this._endDate);
  }

  private validationFormError: String = '';

  display: boolean = false;

  @ViewChild('myDialog')
  private miModal: Dialog;

  constructor(private readonly tournamentService: TournamentService) {
    // this.loadData(); Esto paraliza el renderizado!
  }

  ngOnInit() {
    this.loadData();
  }

  public openWorkArea(selectedTournament: Tournament) {
    console.log('Selected tournament: ' + selectedTournament);
    this.selectedTournament = selectedTournament;
    this.showWorkArea = true;
  }

  public closeWorkArea() {
    this.selectedTournament = null;
    this.showWorkArea = false;
  }

  public loadData() {
    this.tournamentService.getSecuredTournaments().subscribe(
      (result: Tournament[]) => {
        this.tournaments = result;
      }
    );
  }

  public saveEvent() {
    this.newTimelineEvent.eventType = 1;
    this.newTimelineEvent.styleClass = '';
    this.counter = this.counter + 1;
    this.selectedTournament.events.push(this.newTimelineEvent);
  }

  public submit() {
    if (this.newTournament.isValid()) {
      this.validationFormError = '';

      // Procesar y hacer un post!
      this.tournamentService.createTournament(this.newTournament).subscribe(
        (success: any) => {
          this.loadData();
          this.clearForm();
          this.display = false;

          console.log('Creado correctamente');
        },
        (error: any) => {
          console.log('error ', error);
        }
      );
    } else {
      this.validationFormError = 'Error de validación en el formulario';
    }
  }

  public showModal() {
    this.display = true;
  }

  private clearForm() {
    this.newTournament = new Tournament();
    this._endDate = new Date();
    this._startDate = new Date();
    this._title = '';
  }
}
