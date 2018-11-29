import { LoadingActionType } from './const';
import { reducer } from './reducer';
import { LoadingState } from './model';

describe('LoadingReducer', () => {

  it('LoadingActionType.Show', () => {
    // setup
    const state: LoadingState = { isloading: false };

    // exercise
    const actual = reducer(state, { type: LoadingActionType.Show });

    // verify
    expect(actual.isloading).toBeTruthy();
  });

  it('LoadingActionType.Hide', () => {
    // setup
    const state: LoadingState = { isloading: true };

    // exercise
    const actual = reducer(state, { type: LoadingActionType.Hide });

    // verify
    expect(actual.isloading).toBeFalsy();
  });

  it('LoadingActionType.None', () => {
    // setup
    const state: LoadingState = { isloading: true };

    // exercise
    const actual = reducer(state, { type: null });

    // verify
    expect(actual.isloading).toBeTruthy();
  });
});
