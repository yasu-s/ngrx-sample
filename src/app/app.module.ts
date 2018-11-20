
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule, MatTabsModule, MatButtonModule } from '@angular/material';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { CounterComponent, LoadingComponent, MainComponent } from './component';
import { AppStoreModule } from './store/index';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CounterComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatButtonModule,
    AppStoreModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
