import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FEATURE_NAME } from './const';
import { MemoFeatureState } from './model';

/** */
export const selectMemoFeature = createFeatureSelector<MemoFeatureState>(FEATURE_NAME);

/** */
export const getMemos = createSelector(selectMemoFeature, (state) => state.memo.memos);

/** */
export const getError = createSelector(selectMemoFeature, (state) => state.memo.error);
