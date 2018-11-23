import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoadingFeatureState, LoadingState } from './model';

/** */
export const selectLoadingFeature = createFeatureSelector<LoadingFeatureState, LoadingState>('loading');

/** */
export const getLoading = createSelector(selectLoadingFeature, (state: LoadingState) => state.isloading);
