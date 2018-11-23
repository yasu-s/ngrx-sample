import { Memo } from '../../model';

/**
 *
 */
export interface MemoState {
  /** */
  memos: Memo[];
  /** */
  error: any;
}

export const initState: MemoState = {
  memos: [],
  error: null
};

/**
 *
 */
export interface MemoFeatureState {
  /** */
  memo: MemoState;
}
