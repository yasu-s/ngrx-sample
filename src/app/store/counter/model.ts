/**
 *
 */
export interface CounterState {
  /** */
  count: number;
}

export const initState: CounterState  = {
  count: 0
};

/**
 *
 */
export interface CounterRootState {
  /** */
  counter: CounterState;
}
