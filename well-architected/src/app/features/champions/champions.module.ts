import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionsComponent } from './champions/champions.component';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';

const routes: Routes = [
  { path: '', component: ChampionsComponent},
  { path: ':nombreCampeon', component: ChampionDetailComponent},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    CoreModule
  ],
  declarations: [
    ChampionsComponent,
    ChampionDetailComponent
  ],
  exports: [
    ChampionsComponent,
    ChampionDetailComponent
  ]
})
export class ChampionsModule { }
