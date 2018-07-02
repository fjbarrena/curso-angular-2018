import { Component, OnInit } from '@angular/core';
import { LiveWebsocketService } from '../../../core/live-websocket.service';
import { GameEvent } from '../../../shared/entities/game-event';

@Component({
  selector: 'lol-live-game',
  templateUrl: './live-game.component.html',
  styleUrls: ['./live-game.component.scss']
})
export class LiveGameComponent implements OnInit {

  constructor(private readonly live: LiveWebsocketService) { }

  ngOnInit() {
    this.live.onMessage().subscribe(
      (event: GameEvent) => {
        console.log(event);
      }
    )
  }

}
