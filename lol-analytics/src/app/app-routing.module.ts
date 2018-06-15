import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatsComponent } from './stats/stats.component';
import { GamesComponent } from './games/games.component';
import { DashboardInvocadorComponent } from './dashboard-invocador/dashboard-invocador.component';
import { ChampionsComponent } from './champions/champions.component';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/:nombreInvocador', component: DashboardInvocadorComponent },
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
