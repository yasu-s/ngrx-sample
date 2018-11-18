import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { loadingReducer, counterReducer } from './reducers';

@NgModule({
  imports: [
    StoreModule.forRoot({ loading: loadingReducer, count: counterReducer }),
  ]
})
export class AppStoreModule { }
