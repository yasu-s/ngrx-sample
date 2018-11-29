import { MemoActionType } from './const';
import {
  GetMemoSuccessAction, GetMemoFailAction,
  CreateMemoAction, CreateMemoSuccessAction, CreateMemoFailAction
} from './action';
import { reducer } from './reducer';
import { MemoState } from './model';
import { Memo } from '../../model';

describe('MemoReducer', () => {

  it('MemoActionType.GetMemo', () => {
    // setup
    const state: MemoState = { memos: [], error: null };

    // exercise
    const actual = reducer(state, { type: MemoActionType.GetMemo });

    // verify
    expect(actual).toEqual(state);
  });

  it('MemoActionType.GetMemoSuccess', () => {
    // setup
    const state: MemoState = { memos: [], error: 'aaa' };
    const action = new GetMemoSuccessAction({ memos: [{ text: 'hoge' }] as Memo[] });

    // exercise
    const actual = reducer(state, action);

    // verify
    expect(actual.memos.length).toBe(1);
    expect(actual.error).toBeNull();
  });

  it('MemoActionType.GetMemoFail', () => {
    // setup
    const state: MemoState = { memos: [], error: 'aaa' };
    const action = new GetMemoFailAction({ error: 'dummy' });

    // exercise
    const actual = reducer(state, action);

    // verify
    expect(actual.memos.length).toBe(0);
    expect(actual.error).toBe('dummy');
  });

  it('MemoActionType.CreateMemo', () => {
    // setup
    const state: MemoState = { memos: [], error: null };
    const action = new CreateMemoAction({ memo: 'dummy' });

    // exercise
    const actual = reducer(state, action);

    // verify
    expect(actual).toEqual(state);
  });

  it('MemoActionType.CreateMemoSuccess', () => {
    // setup
    const state: MemoState = { memos: [], error: null };
    const action = new CreateMemoSuccessAction({ memo: { text: 'hoge' } as Memo });

    // exercise
    const actual = reducer(state, action);

    // verify
    expect(actual.memos.length).toBe(1);
    expect(actual.error).toBeNull();
  });

  it('MemoActionType.CreateMemoFail', () => {
    // setup
    const state: MemoState = { memos: [], error: 'aaa' };
    const action = new CreateMemoFailAction({ error: 'dummy' });

    // exercise
    const actual = reducer(state, action);

    // verify
    expect(actual.memos.length).toBe(0);
    expect(actual.error).toBe('dummy');
  });

  it('MemoActionType.None', () => {
    // setup
    const state: MemoState = { memos: [], error: 'aaa' };

    // exercise
    const actual = reducer(state, { type: null });

    // verify
    expect(actual.memos.length).toBe(0);
    expect(actual.error).toBe('aaa');
  });
});
