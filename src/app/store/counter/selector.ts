import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FEATURE_NAME } from './const';
import { CounterFeatureState } from './model';

/** */
export const selectCounterFeature = createFeatureSelector<CounterFeatureState>(FEATURE_NAME);

/** */
export const getCount = createSelector(selectCounterFeature, (state) => state.counter.count);
