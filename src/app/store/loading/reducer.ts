import { Action } from '@ngrx/store';
import { LoadingActionType } from './action';
import { LoadingState, initState } from './model';

/**
 *
 * @param state
 * @param action
 */
export function reducer(state: LoadingState = initState, action: Action): LoadingState {
  switch (action.type) {
    case LoadingActionType.Show:
      return { ...state, isloading: true };
    case LoadingActionType.Hide:
      return { ...state, isloading: false };
    default:
      return state;
  }
}
