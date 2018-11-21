import { ActionReducerMap } from '@ngrx/store';
import { counterReducer} from './counter.reducer';
import { loadingReducer } from './loading.reducer';
import * as fromMemo from './memo.reducer';
import { AppState } from '../models';

/**
 *
 */
export const reducers: ActionReducerMap<AppState> = {
  loading: loadingReducer,
  count: counterReducer,
  memo: fromMemo.reducer,
};
