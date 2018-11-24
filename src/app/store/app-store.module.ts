import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CounterStoreModule } from './counter';
import { LoadingStoreModule } from './loading';
import { MemoStoreModule } from './memo';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    CounterStoreModule,
    LoadingStoreModule,
    MemoStoreModule,
  ]
})
export class AppStoreModule { }
