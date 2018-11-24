
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatProgressSpinnerModule, MatTabsModule, MatButtonModule,
  MatListModule, MatInputModule
} from '@angular/material';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { CounterComponent, LoadingComponent, MainComponent, MemoComponent } from './component';
import { AppStoreModule } from './store/index';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CounterComponent,
    LoadingComponent,
    MemoComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    AppStoreModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
