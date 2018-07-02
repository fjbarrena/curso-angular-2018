import { Injectable } from '@angular/core';

import * as socketIo from 'socket.io-client';
import { Observable, BehaviorSubject } from 'rxjs';
import { GameEvent } from '../shared/entities/game-event';
import { GeoTwitt } from '../shared/entities/geotwitt';

const SERVER_URL = 'http://localhost:62000';

@Injectable({
  providedIn: 'root'
})
export class GMapsSocketService {
    private socket;

    constructor() {
      this.initSocket();
    }

    private initSocket(): void {
        this.socket = socketIo(SERVER_URL);
    }

    public onTwitt(): Observable<GeoTwitt> {
        return new Observable<GeoTwitt>(observer => {
            this.socket.on('geo-twitt', (data: GeoTwitt) => {
                observer.next(data);
            });
        });
    }
}
