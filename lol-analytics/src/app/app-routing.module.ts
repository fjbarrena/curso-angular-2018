import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatsComponent } from './stats/stats.component';
import { GamesComponent } from './games/games.component';
import { DashboardInvocadorComponent } from './dashboard-invocador/dashboard-invocador.component';
import { ChampionsComponent } from './champions/champions.component';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';
import { ProfileComponent } from './dashboard-invocador/profile/profile.component';
import { LiveComponent } from './dashboard-invocador/live/live.component';
import { LeaguesComponent } from './dashboard-invocador/leagues/leagues.component';
import { MasteryComponent } from './dashboard-invocador/mastery/mastery.component';
import { AlwaysFalseGuard } from './dashboard-invocador/always-false.guard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/:nombreInvocador', component: DashboardInvocadorComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent,
        canActivate: [AlwaysFalseGuard] },
      { path: 'live', component: LiveComponent,
      canActivate: [AlwaysFalseGuard] },
      { path: 'leagues', component: LeaguesComponent,
      canActivate: [AlwaysFalseGuard] },
      { path: 'mastery', component: MasteryComponent,
      canActivate: [AlwaysFalseGuard] }
    ]
  },
  { path: 'stats', component: StatsComponent },
  { path: 'games', component: GamesComponent },
  { path: 'champions', component: ChampionsComponent },
  { path: 'champions/:nombreCampeon', component: ChampionDetailComponent},
  { path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
