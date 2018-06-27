import { Component, OnInit, ViewChild } from '@angular/core';
import { Tournament } from '../../../shared/entities/tournament';
import { Dialog } from 'primeng/dialog';
import { DateUtils } from '../../../shared/util/DateUtils';
import { TournamentService } from '../../../core/tournament.service';

@Component({
  selector: 'lol-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  private tournaments: Tournament[] = [];

  private newTournament: Tournament = new Tournament();

  private _title: String = '';
  private _startDate: Date;
  private _endDate: Date;

  private titleValidationSuccess = true;

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

  public loadData() {
    this.tournamentService.getSecuredTournaments().subscribe(
      (result: Tournament[]) => {
        this.tournaments = result;
      }
    );
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
