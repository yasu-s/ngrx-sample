
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule, MatTabsModule, MatButtonModule } from '@angular/material';

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
    MatProgressSpinnerModule,
    MatTabsModule,
    MatButtonModule,
    AppStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
