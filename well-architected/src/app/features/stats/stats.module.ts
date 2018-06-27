import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './stats/stats.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { FeaturesModule } from '../features.module';

const routes: Routes = [
  { path: '', component: StatsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    ButtonModule,
    DialogModule,
    FeaturesModule
  ],
  declarations: [StatsComponent]
})
export class StatsModule { }
