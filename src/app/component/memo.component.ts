import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Memo } from '../model';
import { MemoFeatureState, getMemos, GetMemoAction, CreateMemoAction, MemoActionType } from '../store/memo';

@Component({
  selector: 'custom-memo',
  templateUrl: './memo.component.html'
})
export class MemoComponent implements OnInit, OnDestroy {

  /** */
  memo = '';

  /** */
  memos$: Observable<Memo[]>;

  /** */
  private readonly onDestroy$ = new EventEmitter();

  /**
   *
   * @param store
   */
  constructor(private store: Store<MemoFeatureState>, private actions$: Actions) {
    this.memos$ = store.select(getMemos);
  }

  /**
   *
   */
  ngOnInit(): void {
    this.store.dispatch(new GetMemoAction());

    this.actions$.pipe(
      ofType(MemoActionType.CreateMemoSuccess),
      takeUntil(this.onDestroy$)
    ).subscribe(_ => {
      this.memo = '';
    });

    this.actions$.pipe(
      ofType(MemoActionType.CreateMemoFail),
      takeUntil(this.onDestroy$)
    ).subscribe(error => {
      console.log('CreateMemoFail -', error);
    })
  }

  /**
   *
   */
  ngOnDestroy(): void {
    this.onDestroy$.emit();
  }

  /**
   *
   */
  addMemo(): void {
    if (!this.memo) return;
    this.store.dispatch(new CreateMemoAction({ memo: this.memo }));
  }
}
