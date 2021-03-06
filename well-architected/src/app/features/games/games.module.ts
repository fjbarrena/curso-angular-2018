import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games/games.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { FeaturesModule } from '../features.module';

const routes: Routes = [
  { path: '', component: GamesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    FeaturesModule
  ],
  declarations: [GamesComponent]
})
export class GamesModule { }
