import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { loadingReducer } from './store/index';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forFeature('loading', loadingReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
