import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { LoadingFeatureState, LoadingState, initState } from './model';

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

/** */
export const selectLoadingFeature = createFeatureSelector<LoadingFeatureState, LoadingState>('loading');

/** */
export const getLoading = createSelector(selectLoadingFeature, (state: LoadingState) => state.isloading);
