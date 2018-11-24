import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MemoService } from './service';
import { reducer } from './reducer';
import { MemoEffect } from './effect';

@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forFeature('memo', reducer),
    EffectsModule.forFeature([MemoEffect]),
  ],
  providers: [
    MemoService
  ]
})
export class MemoStoreModule { }
