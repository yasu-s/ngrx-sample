import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { CounterStoreModule } from './counter';
import { reducers } from './reducers';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    CounterStoreModule,
  ]
})
export class AppStoreModule { }
