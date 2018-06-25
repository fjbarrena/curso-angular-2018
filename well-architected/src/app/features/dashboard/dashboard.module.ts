import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeaturesModule } from '../features.module';
import { TimelineComponent } from '../../shared/timeline/timeline.component';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule,
    SharedModule
  ],
  declarations: [DashboardComponent],
  exports: [CoreModule, SharedModule]
})
export class DashboardModule { }
