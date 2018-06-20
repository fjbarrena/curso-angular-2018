import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionService } from './champion.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    ChampionService
  ],
  exports: [SharedModule]
})
export class CoreModule { }
