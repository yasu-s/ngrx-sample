import { Action } from '@ngrx/store';
import { CounterActionType } from './action';
import { CounterState, initState } from './model';

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
