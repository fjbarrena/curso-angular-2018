import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games/games.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: GamesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GamesComponent]
})
export class GamesModule { }
