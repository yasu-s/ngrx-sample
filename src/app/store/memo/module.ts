import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FEATURE_NAME } from './const';
import { MemoService } from './service';
import { reducers } from './reducer';
import { MemoEffect } from './effect';

@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    EffectsModule.forFeature([MemoEffect]),
  ],
  providers: [
    MemoService
  ]
})
export class MemoStoreModule { }
