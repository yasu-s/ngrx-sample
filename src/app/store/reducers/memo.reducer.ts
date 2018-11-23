import { AppState } from '../models';
import { MemoActionType, MemoActions } from '../actions';
import { Memo } from '../../model';


/**
 *
 * @param state
 * @param action
 */
export function reducer(state: Memo[] = [], action: MemoActions): Memo[] {
  switch (action.type) {
    case MemoActionType.GetMemo:
      return state;
    default:
      return state;
  }
}
