import { Injectable } from '@angular/core';

import * as socketIo from 'socket.io-client';
import { Observable } from 'rxjs';
import { GameEvent } from '../shared/entities/game-event';

const SERVER_URL = 'http://localhost:63000';

@Injectable({
  providedIn: 'root'
})
export class LiveWebsocketService {
    private socket;

    constructor() {
      this.initSocket();
    }

    private initSocket(): void {
        this.socket = socketIo(SERVER_URL);
    }

    public onMessage(): Observable<GameEvent> {
        return new Observable<GameEvent>(observer => {
            this.socket.on('game-event', (data: GameEvent) => observer.next(data));
        });
    }

}
