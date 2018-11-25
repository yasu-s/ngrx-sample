import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FEATURE_NAME } from './const';
import { LoadingFeatureState } from './model';

/** */
export const selectLoadingFeature = createFeatureSelector<LoadingFeatureState>(FEATURE_NAME);

/** */
export const getLoading = createSelector(selectLoadingFeature, (state) => state.loading.isloading);
