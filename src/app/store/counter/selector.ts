import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterFeatureState, CounterState } from './model';

/** */
export const selectCounterFeature = createFeatureSelector<CounterFeatureState, CounterState>('counter');

/** */
export const getCount = createSelector(selectCounterFeature, (state: CounterState) => state.count);
