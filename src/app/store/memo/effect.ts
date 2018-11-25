import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, mergeMap } from 'rxjs/operators';

import { MemoActionType } from './const';
import {
  GetMemoAction, GetMemoSuccessAction, GetMemoFailAction,
  CreateMemoAction, CreateMemoSuccessAction
} from './action';
import { MemoService } from './service';
import { Memo } from '../../model';

/**
 *
 */
@Injectable()
export class MemoEffect {

  constructor(private actions$: Actions, private memoService: MemoService) {}

  @Effect()
  findAll$: Observable<Action> = this.actions$.pipe(
    ofType<GetMemoAction>(MemoActionType.GetMemo),
    switchMap(_ => {
      return this.memoService.findAll().pipe(
        map(data => new GetMemoSuccessAction({ memos: data })),
        catchError(error => of(new GetMemoFailAction({ error: error })))
      );
    })
  );

  @Effect()
  add$: Observable<Action> = this.actions$.pipe(
    ofType<CreateMemoAction>(MemoActionType.CreateMemo),
    mergeMap(action => {
      const data = { text: action.payload.memo } as Memo;
      return of(new CreateMemoSuccessAction({ memo: data }));
    })
  );
}
