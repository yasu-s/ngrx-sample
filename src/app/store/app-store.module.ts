import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { CounterStoreModule } from './counter';
import { LoadingStoreModule } from './loading';
import { reducers } from './reducers';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    CounterStoreModule,
    LoadingStoreModule,
  ]
})
export class AppStoreModule { }
