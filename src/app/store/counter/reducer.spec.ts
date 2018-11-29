import { CounterActionType } from './const';
import { reducer } from './reducer';
import { CounterState } from './model';

describe('CounterReducer', () => {

  it('CounterActionType.Increment', () => {
    // setup
    const state: CounterState = { count: 0 };

    // exercise
    const actual = reducer(state, { type: CounterActionType.Increment });

    // verify
    expect(actual.count).toBe(1);
  });

  it('CounterActionType.Decrement', () => {
    // setup
    const state: CounterState = { count: 0 };

    // exercise
    const actual = reducer(state, { type: CounterActionType.Decrement });

    // verify
    expect(actual.count).toBe(-1);
  });

  it('CounterActionType.Reset', () => {
    // setup
    const state: CounterState = { count: 1 };

    // exercise
    const actual = reducer(state, { type: CounterActionType.Reset });

    // verify
    expect(actual.count).toBe(0);
  });

  it('CounterActionType.None', () => {
    // setup
    const state: CounterState = { count: 1 };

    // exercise
    const actual = reducer(state, { type: null });

    // verify
    expect(actual.count).toBe(1);
  });
});
