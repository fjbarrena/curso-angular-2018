import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionsComponent } from './champions/champions.component';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ChampionsComponent},
  { path: ':nombreCampeon', component: ChampionDetailComponent},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
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
