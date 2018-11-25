import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { FEATURE_NAME } from './const';
import { reducers } from './reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(FEATURE_NAME, reducers)
  ]
})
export class LoadingStoreModule { }
