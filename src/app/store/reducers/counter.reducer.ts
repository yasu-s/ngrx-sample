import { Action } from '@ngrx/store';
import { AppState } from '../models';

/**
 * Action種類：Counter
 */
export enum CounterActionType {
  Increment = '[Counter] Increment',
  Decrement = '[Counter] Decrement',
  Reset     = '[Counter] Reset',
}

/**
 *
 * @param state
 * @param action
 */
export function counterReducer(state: number = 0, action: Action): number {
  switch (action.type) {
    case CounterActionType.Increment:
      return state + 1;
    case CounterActionType.Decrement:
      return state - 1;
    case CounterActionType.Reset:
      return 0;
    default:
      return state;
  }
}


/** */
export const getCount = (state: AppState) => state.count;
