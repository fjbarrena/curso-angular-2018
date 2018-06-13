import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MadeWithLoveComponent } from './made-with-love/made-with-love.component';
import { MyLoggerService } from './my-logger.service';
import { SobreponerDirective } from './sobreponer.directive';
import { MyHiddenDirective } from './my-hidden.directive';


@NgModule({
  declarations: [
    AppComponent,
    MadeWithLoveComponent,
    SobreponerDirective,
    MyHiddenDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MyLoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
