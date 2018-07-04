import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/reducers';
import { LoginFormComponent } from './login-form/login-form.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoginResponseComponent } from './login-response/login-response.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginResponseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    StoreModule.forRoot({
      login: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

