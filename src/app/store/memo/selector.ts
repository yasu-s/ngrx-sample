import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MemoFeatureState, MemoState } from './model';

/** */
export const selectMemoFeature = createFeatureSelector<MemoFeatureState, MemoState>('memo');

/** */
export const getMemos = createSelector(selectMemoFeature, (state: MemoState) => state.memos);

/** */
export const getError = createSelector(selectMemoFeature, (state: MemoState) => state.error);
