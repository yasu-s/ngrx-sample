import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { CounterStoreModule } from './counter';
import { LoadingStoreModule } from './loading';
import { MemoStoreModule } from './memo';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    CounterStoreModule,
    LoadingStoreModule,
    MemoStoreModule,
  ]
})
export class AppStoreModule { }
