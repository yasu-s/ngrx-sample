import { Action } from '@ngrx/store';

/**
 * Action種類：Loading
 */
export enum LoadingActionType {
  Show = '[Loading] Show',
  Hide = '[Loading] Hide',
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
