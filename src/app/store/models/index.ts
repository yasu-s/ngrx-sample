import { Memo } from '../../model';

/**
 *
 */
export interface AppState {
  /** */
  loading: boolean;
  /** */
  count: number;
  /** */
  memo: Memo[];
}
