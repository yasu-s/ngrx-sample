/** */
export const FEATURE_NAME = 'memo_store';

/**
 * Action種類：Memo
 */
export enum MemoActionType {
  GetMemo           = '[Memo] Get',
  GetMemoSuccess    = '[Memo] Get Success',
  GetMemoFail       = '[Memo] Get Fail',
  CreateMemo        = '[Memo] Create',
  CreateMemoSuccess = '[Memo] Create Success',
  CreateMemoFail    = '[Memo] Create Fail',
}
