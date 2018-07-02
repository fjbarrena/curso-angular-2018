import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionService } from './champion.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { LoginService } from './login.service';
import { CurrentUserService } from './current-user.service';
import { TournamentService } from './tournament.service';
import { LiveWebsocketService } from './live-websocket.service';
import { GMapsSocketService } from './gmaps-socket.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ChampionService,
    LoginService,
    CurrentUserService,
    TournamentService,
    LiveWebsocketService,
    GMapsSocketService
  ],
  exports: []
})
export class CoreModule { }
