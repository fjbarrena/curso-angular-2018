import { Component, OnInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { LiveWebsocketService } from '../../../core/live-websocket.service';
import { GameEvent } from '../../../shared/entities/game-event';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'lol-live-game',
  templateUrl: './live-game.component.html',
  styleUrls: ['./live-game.component.scss']
})
export class LiveGameComponent implements OnInit, OnDestroy {
  public events: GameEvent[] = [];
  public origenEvents: GameEvent[] = [];
  public g2Event: GameEvent[] = [];

  // tslint:disable-next-line:no-inferrable-types
  public g2Kills: number = 0;
  // tslint:disable-next-line:no-inferrable-types
  public origenKills: number = 0;

  private subscription: Subscription;

  constructor(private readonly live: LiveWebsocketService) { }

  ngOnInit() {
     this.subscription = this.live.onMessage().subscribe(
      (event: GameEvent) => {
        this.events.push(event);

        if (event.team.toLowerCase() === 'g2') {
          this.g2Event.push(event);

          if (event.type.toLowerCase() === 'kill') {
            this.g2Kills++;
          }
        } else {
          this.origenEvents.push(event);

          if (event.type.toLowerCase() === 'kill') {
            this.origenKills++;
          }
        }
      }
    );
  }

  ngOnDestroy(): void {
    console.log('Desuscribiendo');

    this.subscription.unsubscribe();
  }
}
