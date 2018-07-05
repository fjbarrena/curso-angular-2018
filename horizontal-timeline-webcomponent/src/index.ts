import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import '@webcomponents/custom-elements/src/native-shim';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
