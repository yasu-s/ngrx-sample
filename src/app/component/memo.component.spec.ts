import { TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs';

import { MemoComponent } from './memo.component';
import { Memo } from '../model';
import * as fromMemo from '../store/memo';

describe('MemoComponent', () => {
  let component: MemoComponent;
  let store: Store<fromMemo.MemoFeatureState>;
  let actions: ReplaySubject<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreModule.forFeature(fromMemo.FEATURE_NAME, fromMemo.reducers),
      ],
      providers: [
        MemoComponent,
        provideMockActions(() => actions),
      ]
    });

    component = TestBed.get(MemoComponent);
    store     = TestBed.get(Store);
  });

  it('should be created', () => {
    expect(component).toBeDefined();
  });

  describe('ngOnInit', () => {
    it('success', () => {
      // setup
      store.dispatch = jasmine.createSpy();

      // exercise
      component.ngOnInit();

      // verify
      expect(store.dispatch).toHaveBeenCalledWith(new fromMemo.GetMemoAction());
    });

    it('MemoActionType.CreateMemoSuccess', () => {
      // setup
      component.memo = 'a';
      actions = new ReplaySubject(1);
      store.dispatch = jasmine.createSpy();
      component.ngOnInit();

      // exercise
      actions.next(new fromMemo.CreateMemoSuccessAction({ memo: null }));

      // verify
      expect(component.memo).toBe('');
    });

    it('MemoActionType.CreateMemoFail', () => {
      // setup
      component.memo = 'a';
      actions = new ReplaySubject(1);
      component.ngOnInit();

      // exercise
      actions.next(new fromMemo.CreateMemoFailAction({ error: null }));

      // verify
      expect(component.memo).toBe('a');
    });
  });

  describe('ngOnDestroy', () => {
    it('success', () => {
      // setup
      const destroy = (component as any).onDestroy$;
      destroy.emit = jasmine.createSpy();

      // exercise
      component.ngOnDestroy();

      // verify
      expect(destroy.emit).toHaveBeenCalled();
    });
  });

  describe('memos$', () => {
    it('success', done => {
      // setup
      const memos = [{ text: 'hoge' }, { text: 'memo' }] as Memo[];
      const action = new fromMemo.GetMemoSuccessAction({ memos: memos });

      // exercise
      store.dispatch(action);

      // verify
      component.memos$.subscribe(data => {
        expect(data).toEqual(memos);
        done();
      });
    });
  });

  describe('addMemo', () => {
    it('success', () => {
      // setup
      component.memo = 'dummy';
      store.dispatch = jasmine.createSpy();

      // exercise
      component.addMemo();

      // verify
      expect(store.dispatch).toHaveBeenCalledWith(new fromMemo.CreateMemoAction({ memo: 'dummy' }));
    });

    it('memo = empty', () => {
      // setup
      component.memo = '';
      store.dispatch = jasmine.createSpy();

      // exercise
      component.addMemo();

      // verify
      expect(store.dispatch).not.toHaveBeenCalled();
    });
  });
});
