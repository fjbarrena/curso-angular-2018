import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenericService } from './generic.service';
import { ChampionStaticData } from '../shared/entities/champion.static.data';
import { CurrentUserService } from './current-user.service';
import { Tournament } from '../shared/entities/tournament';

@Injectable({
  providedIn: 'root'
})
export class TournamentService extends GenericService<Tournament> {
  constructor(private readonly http: HttpClient,
    private readonly currentUserService: CurrentUserService) {
    super(http, 'tournaments');
    console.log('INSTANCIANDO NUEVO TOURNAMENTSERVICE');
  }

  public getSecuredTournaments(): Observable<Tournament[]> {
    return this.http.get<Tournament[]>
      (this.composeBasicUrl('tournaments'),
      {headers: this.buildAuthHeader(
        this.currentUserService.token.access_token)}
    );
  }

  public createTournament(tournament: Tournament): Observable<Response> {
    return this.http.post<Response>(
      this.composeBasicUrl('tournaments'),
      tournament,
      {
        headers: this.buildAuthHeader(this.currentUserService.token.access_token)
      }
    );
  }

  

}
