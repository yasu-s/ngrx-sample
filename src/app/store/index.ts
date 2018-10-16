import { Action } from '@ngrx/store';

/**
 *
 */
export interface State {
  /** */
  loading: boolean;
}


/**
 * Actionの種類
 */
export enum LoadingActionType {
  Show = '[Loading] Show',
  Hide = '[Loading] Hide',
}

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
