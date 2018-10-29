import { Action } from '@ngrx/store';

/**
 *
 */
export interface AppState {
  /** */
  loading: boolean;
  /** */
  count: number;
}


/**
 * Action種類：Loading
 */
export enum LoadingActionType {
  Show = '[Loading] Show',
  Hide = '[Loading] Hide',
}

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
export function loadingReducer(state: boolean = false, action: Action): boolean {
  switch (action.type) {
    case LoadingActionType.Show:
      return true;
    case LoadingActionType.Hide:
      return false;
    default:
      return state;
  }
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
