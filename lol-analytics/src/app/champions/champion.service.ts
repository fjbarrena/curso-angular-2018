import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GenericService } from '../generic.service';
import { ChampionStaticData } from './champion.static.data';

@Injectable({
  providedIn: 'root'
})
export class ChampionService extends GenericService<ChampionStaticData> {
  constructor(private readonly http: HttpClient) {
    super(http, 'champ-static-data');
  }

}
