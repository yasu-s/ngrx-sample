import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatListModule, MatButtonModule, MatInputModule } from '@angular/material';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MemoComponent } from './memo.component';
import { Memo } from '../model';
import {
  MemoFeatureState, MemoStoreModule,
  GetMemoAction, GetMemoSuccessAction
} from '../store/memo';

describe('MemoComponent', () => {
  let component: MemoComponent;
  let fixture: ComponentFixture<MemoComponent>;
  let store: Store<MemoFeatureState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatListModule,
        MatButtonModule,
        MatInputModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        MemoStoreModule,
      ],
      declarations: [
        MemoComponent,
      ],
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
      expect(store.dispatch).toHaveBeenCalledWith(new GetMemoAction());
    });
  });

  describe('memos$', () => {
    it('success', done => {
      // setup
      const memos = [{ text: 'hoge' }, { text: 'memo' }] as Memo[];
      const action = new GetMemoSuccessAction({ memos: memos });

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
  });
});
