import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveGameComponent } from './live-game/live-game.component';
import { Routes, RouterModule } from '@angular/router';
import {GMapModule} from 'primeng/gmap';


const routes: Routes = [
  { path: '', component: LiveGameComponent }
];

@NgModule({
  imports: [
    CommonModule,
    GMapModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LiveGameComponent]
})
export class LiveModule { }
