import { Action, ActionReducerMap } from '@ngrx/store';
import { LoadingActionType } from './const';
import { LoadingState, initState, LoadingFeatureState } from './model';

/** */
export const reducers: ActionReducerMap<LoadingFeatureState> = {
  loading: reducer
}

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
