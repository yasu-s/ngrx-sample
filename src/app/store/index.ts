import { Action } from '@ngrx/store';

/**
 *
 */
export interface State {
  /** */
  loading: boolean;
}

export const initState: State = {
  loading: false
};

/**
 * Actionの種類
 */
export enum LoadingActionType {
  Show = '[Loading] Show',
  Hide = '[Loading] Hide',
}

export function loadingReducer(state: State = initState, action: Action): State {
  switch (action.type) {
    case LoadingActionType.Show:
      return { loading: true };
    case LoadingActionType.Hide:
      return { loading: false };
    default:
      return state;
  }
}

export const getLoading = (state: State) => state.loading;
