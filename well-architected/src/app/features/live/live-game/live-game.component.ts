import { Component, OnInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { LiveWebsocketService } from '../../../core/live-websocket.service';
import { GameEvent } from '../../../shared/entities/game-event';
import { Observable, Subscription } from 'rxjs';
import { GMapsSocketService } from '../../../core/gmaps-socket.service';
import { GeoTwitt } from '../../../shared/entities/geotwitt';

declare var google: any;

@Component({
  selector: 'lol-live-game',
  templateUrl: './live-game.component.html',
  styleUrls: ['./live-game.component.scss']
})
export class LiveGameComponent implements OnInit, OnDestroy {
  public events: GameEvent[] = [];
  public origenEvents: GameEvent[] = [];
  public g2Event: GameEvent[] = [];

  options: any;
  overlays: any = [];

  // tslint:disable-next-line:no-inferrable-types
  public g2Kills: number = 0;
  // tslint:disable-next-line:no-inferrable-types
  public origenKills: number = 0;

  private subscription: Subscription;

  constructor(private readonly live: LiveWebsocketService,
              private readonly gmaps: GMapsSocketService) { }

  ngOnInit() {
    this.gmaps.startReceivingData();

    this.gmaps.gmaps$.subscribe(
      (x: GeoTwitt) => {
        console.log(x);
        this.overlays.push(
          new google.maps.Marker(
            {
              position: {lat: x.lat, lng: x.long},
              title: x.account}
          )
        );
      }
    );

    this.options = {
      center: {lat: 36.890257, lng: 30.707417},
      zoom: 12
  };


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
