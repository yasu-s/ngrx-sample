import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterFeatureState, CounterState, initState } from './model';

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

export const selectCounterFeature = createFeatureSelector<CounterFeatureState, CounterState>('counter');

/** */
export const getCount = createSelector(selectCounterFeature, (state: CounterState) => state.count);
