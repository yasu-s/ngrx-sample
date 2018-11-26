import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatListModule, MatButtonModule, MatInputModule } from '@angular/material';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs';

import { MemoComponent } from './memo.component';
import { Memo } from '../model';
import * as fromMemo from '../store/memo';

describe('MemoComponent', () => {
  let component: MemoComponent;
  let fixture: ComponentFixture<MemoComponent>;
  let store: Store<fromMemo.MemoFeatureState>;
  let actions: ReplaySubject<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatListModule,
        MatButtonModule,
        MatInputModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreModule.forFeature(fromMemo.FEATURE_NAME, fromMemo.reducers),
      ],
      declarations: [
        MemoComponent,
      ],
      providers: [
        provideMockActions(() => actions),
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(MemoComponent);
    component = fixture.componentInstance;
    store     = TestBed.get(Store);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('success', () => {
      // setup
      spyOn(store, 'dispatch').and.callThrough();

      // exercise
      component.ngOnInit();

      // verify
      expect(store.dispatch).toHaveBeenCalledWith(new fromMemo.GetMemoAction());
    });

    it('MemoActionType.CreateMemoSuccess', () => {
      // setup
      actions = new ReplaySubject(1);

      // exercise
      actions.next(new fromMemo.CreateMemoSuccessAction({ memo: null }));

      // verify
      expect(component.memo).toBe('');
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
      spyOn(store, 'dispatch').and.callThrough();

      // exercise
      component.addMemo();

      // verify
      expect(store.dispatch).toHaveBeenCalledWith(new fromMemo.CreateMemoAction({ memo: 'dummy' }));
    });

    it('memo = empty', () => {
      // setup
      component.memo = '';
      spyOn(store, 'dispatch').and.callThrough();

      // exercise
      component.addMemo();

      // verify
      expect(store.dispatch).not.toHaveBeenCalled();
    });
  });
});
