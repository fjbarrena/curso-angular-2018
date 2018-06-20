import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './stats/stats.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: StatsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StatsComponent]
})
export class StatsModule { }
