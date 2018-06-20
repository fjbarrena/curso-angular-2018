import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'champions', loadChildren: './features/champions/champions.module#ChampionsModule'},
  { path: 'games', loadChildren: './features/games/games.module#GamesModule'},
  { path: 'stats', loadChildren: './features/stats/stats.module#StatsModule'},
  { path: 'dashboard', loadChildren: './features/dashboard/dashboard.module#DashboardModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
