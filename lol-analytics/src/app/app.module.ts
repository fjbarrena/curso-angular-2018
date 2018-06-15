import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatsComponent } from './stats/stats.component';
import { GamesComponent } from './games/games.component';
import { DashboardInvocadorComponent } from './dashboard-invocador/dashboard-invocador.component';
import { ChampionsComponent } from './champions/champions.component';
import { HttpClientModule } from '@angular/common/http';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StatsComponent,
    GamesComponent,
    DashboardInvocadorComponent,
    ChampionsComponent,
    ChampionDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
