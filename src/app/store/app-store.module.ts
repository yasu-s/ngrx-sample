import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducers } from './reducers';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
  ]
})
export class AppStoreModule { }
