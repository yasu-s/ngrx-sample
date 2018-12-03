import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject, of, throwError } from 'rxjs';

import { MemoEffect } from './effect';
import {
  GetMemoSuccessAction, GetMemoFailAction,
  CreateMemoAction, CreateMemoSuccessAction
} from './action';
import { MemoActionType } from './const';
import { MemoService } from './service';

describe('MemoEffect', () => {
  let effect: MemoEffect;
  let service: MemoService;
  let actions: ReplaySubject<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      providers: [
        MemoEffect,
        provideMockActions(() => actions),
        { provide: MemoService, useValue: { findAll: null } },
      ]
    });

    effect  = TestBed.get(MemoEffect);
    service = TestBed.get(MemoService);
  });

  it('should be created', () => {
    expect(effect).toBeTruthy();
  });

  describe('findAll', () => {
    it('GetMemoSuccessAction', (done) => {
      // setup
      actions = new ReplaySubject(1);
      service.findAll = jasmine.createSpy().and.returnValue(of([]));

      // exercise
      actions.next({ type: MemoActionType.GetMemo });

      // verify
      effect.findAll$.subscribe(result => {
        expect(result.type).toBe(MemoActionType.GetMemoSuccess);
        expect((<GetMemoSuccessAction>result).payload.memos).toEqual([]);
        expect(service.findAll).toHaveBeenCalled();
        done();
      });
    });

    it('GetMemoFailAction', (done) => {
      // setup
      actions = new ReplaySubject(1);
      service.findAll = jasmine.createSpy().and.returnValue(throwError('error'));

      // exercise
      actions.next({ type: MemoActionType.GetMemo });

      // verify
      effect.findAll$.subscribe(result => {
        expect(result.type).toBe(MemoActionType.GetMemoFail);
        expect((<GetMemoFailAction>result).payload.error).toBe('error');
        expect(service.findAll).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('add', () => {
    it('GetMemoSuccessAction', (done) => {
      // setup
      actions = new ReplaySubject(1);
      const action = new CreateMemoAction({ memo: 'hoge' });

      // exercise
      actions.next(action);

      // verify
      effect.add$.subscribe(result => {
        expect(result.type).toBe(MemoActionType.CreateMemoSuccess);
        expect((<CreateMemoSuccessAction>result).payload.memo.text).toBe('hoge');
        done();
      });
    });
  });
});
