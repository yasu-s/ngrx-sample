
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoadingComponent, MainComponent } from './component';
import { AppStoreModule } from './store/index';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    AppStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
