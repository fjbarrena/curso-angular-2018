import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  declarations: [
    TimelineComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    TimelineComponent
  ],
  providers: []
})
export class AppModule {
  constructor(private readonly injector: Injector) {}

  ngDoBootstrap() {
    const customTimeline = createCustomElement(TimelineComponent, { injector: this.injector });
    customElements.define('paco-timeline', customTimeline);
  }
}
