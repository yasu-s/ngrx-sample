import { ActionReducerMap } from '@ngrx/store';
import * as fromMemo from './memo.reducer';
import { AppState } from '../models';

/**
 *
 */
export const reducers: ActionReducerMap<AppState> = {
  memo: fromMemo.reducer,
};
