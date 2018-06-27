import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionsComponent } from './champions/champions.component';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { FeaturesModule } from '../features.module';

const routes: Routes = [
  { path: '', component: ChampionsComponent},
  { path: ':nombreCampeon', component: ChampionDetailComponent},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeaturesModule
  ],
  declarations: [
    ChampionsComponent,
    ChampionDetailComponent
  ],
  exports: [ ]
})
export class ChampionsModule { }
