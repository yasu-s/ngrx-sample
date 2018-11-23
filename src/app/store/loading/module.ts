import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducer } from './reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('loading', reducer)
  ]
})
export class LoadingStoreModule { }
