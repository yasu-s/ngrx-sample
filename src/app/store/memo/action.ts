import { Action } from '@ngrx/store';
import { MemoActionType } from './const';
import { Memo } from '../../model';

/**
 * [Action] MemoActionType.GetMemo
 */
export class GetMemoAction implements Action {
  readonly type = MemoActionType.GetMemo;
  constructor() {
  }
}

/**
 * [Action] MemoActionType.GetMemoSuccess
 */
export class GetMemoSuccessAction implements Action {
  readonly type = MemoActionType.GetMemoSuccess;
  constructor(public payload: { memos: Memo[] }) {
  }
}

/**
 * [Action] MemoActionType.GetMemoFail
 */
export class GetMemoFailAction implements Action {
  readonly type = MemoActionType.GetMemoFail;
  constructor(public payload?: { error: any }) {
  }
}

/**
 * [Action] MemoActionType.CreateMemo
 */
export class CreateMemoAction implements Action {
  readonly type = MemoActionType.CreateMemo;
  constructor(public payload: { memo: string }) {
  }
}

/**
 * [Action] MemoActionType.CreateMemoSuccess
 */
export class CreateMemoSuccessAction implements Action {
  readonly type = MemoActionType.CreateMemoSuccess;
  constructor(public payload: { memo: Memo }) {
  }
}

/**
 * [Action] MemoActionType.CreateMemoFail
 */
export class CreateMemoFailAction implements Action {
  readonly type = MemoActionType.CreateMemoFail;
  constructor(public payload?: { error: any }) {
  }
}

/**
 * Actions
 */
export type MemoActions =
  GetMemoAction | GetMemoSuccessAction | GetMemoFailAction |
  CreateMemoAction | CreateMemoSuccessAction | CreateMemoFailAction;
