import { Action } from '@ngrx/store';
import { Memo } from '../../model';

/**
 * Action種類：Memo
 */
export enum MemoActionType {
  GetMemo        = '[Memo] Get',
  CreateMemo        = '[Memo] Create',
  CreateMemoSuccess = '[Memo] Create Success',
  CreateMemoFail    = '[Memo] Create Fail',
}

/**
 * [Action] MemoActionType.GetMemo
 */
export class GetMemoAction implements Action {
  readonly type = MemoActionType.GetMemo;
  constructor() {
  }
}

/**
 * [Action] MemoActionType.CreateMemo
 */
export class CreateMemoAction implements Action {
  readonly type = MemoActionType.CreateMemo;
  constructor(public payload: { memo: Memo }) {
  }
}

/**
 * [Action] MemoActionType.CreateMemoSuccess
 */
export class CreateMemoSuccessAction implements Action {
  readonly type = MemoActionType.CreateMemoSuccess;
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
export type MemoActions = GetMemoAction | CreateMemoAction | CreateMemoSuccessAction | CreateMemoFailAction;
