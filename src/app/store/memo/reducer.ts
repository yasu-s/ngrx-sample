import { MemoActionType, MemoActions } from './action';
import { MemoState, initState } from './model';

/**
 *
 * @param state
 * @param action
 */
export function reducer(state: MemoState = initState, action: MemoActions): MemoState {
  switch (action.type) {
    case MemoActionType.GetMemo:
      return { ...state, error: null };
    case MemoActionType.GetMemoSuccess:
      return { ...state, memos: action.payload.memos, error: null };
    case MemoActionType.GetMemoFail:
      return { ...state, error: action.payload.error };
    case MemoActionType.CreateMemo:
      return { ...state, error: null };
    case MemoActionType.CreateMemoSuccess:
      return { ...state, memos: state.memos.concat(action.payload.memo), error: null };
    case MemoActionType.CreateMemoFail:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
}
