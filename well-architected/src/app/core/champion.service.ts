import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenericService } from './generic.service';
import { ChampionStaticData } from '../shared/entities/champion.static.data';
import { CurrentUserService } from './current-user.service';

@Injectable({
  providedIn: 'root'
})
export class ChampionService extends GenericService<ChampionStaticData> {
  constructor(private readonly http: HttpClient,
    private readonly currentUserService: CurrentUserService) {
    super(http, 'champ-static-data');
    console.log('INSTANCIANDO NUEVO CHAMPIONSERVICE');
  }

  public getSecuredAll(): Observable<ChampionStaticData[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization',
      'Bearer ' + this.currentUserService.token.access_token );

    return this.http.get<ChampionStaticData[]>
      (this.composeBasicUrl('champ-static-data'),
      {headers: headers}
    );
  }

}
