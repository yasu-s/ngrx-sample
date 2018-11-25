import { Action, ActionReducerMap } from '@ngrx/store';
import { CounterActionType } from './const';
import { CounterState, initState, CounterFeatureState } from './model';

/** */
export const reducers: ActionReducerMap<CounterFeatureState> = {
  counter: reducer
}

/**
 *
 * @param state
 * @param action
 */
export function reducer(state: CounterState = initState, action: Action): CounterState {
  switch (action.type) {
    case CounterActionType.Increment:
      return { ...state, count: state.count + 1 };
    case CounterActionType.Decrement:
      return { ...state, count: state.count - 1 };
    case CounterActionType.Reset:
      return { ...state, count: 0 };
    default:
      return state;
  }
}
