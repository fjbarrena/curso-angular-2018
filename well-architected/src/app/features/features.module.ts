import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PrivateComponent } from './private/private.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';

const routes: Routes = [
  { path: 'private',
    component: PrivateComponent,
    children: [
      { path: 'champions', loadChildren: './champions/champions.module#ChampionsModule'},
      { path: 'games', loadChildren: './games/games.module#GamesModule'},
      { path: 'stats', loadChildren: './stats/stats.module#StatsModule'},
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'}
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    // WEIRD! Como ChampionsModule está siendo cargado en modo Lazy, si lo defino
    // aquí, no va a funcionar. Dará un error del siguiente estilo:
    // TypeError: undefined is not a function
    // at Array.map (<anonymous>)
    // at webpackAsyncContext (eval at ./src/$$_lazy_route_resource lazy recursive
    // La clave está en el "lazy recursive"
    // ChampionsModule,
    // DashboardModule,
    // GamesModule,
    // StatsModule,
    RouterModule.forChild(routes),
    FormsModule,
    CoreModule,
    SharedModule,
    NgxSmartModalModule.forRoot()
  ],
  declarations: [PrivateComponent],
  exports: [CoreModule, SharedModule]
})
export class FeaturesModule { }
