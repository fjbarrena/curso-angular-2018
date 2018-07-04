import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import '@webcomponents/custom-elements/src/native-shim';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
