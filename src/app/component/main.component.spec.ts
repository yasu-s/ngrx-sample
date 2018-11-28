import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatTabsModule, MatButtonModule } from '@angular/material';
import { StoreModule, Store } from '@ngrx/store';

import { MainComponent } from './main.component';
import * as fromLoading from '../store/loading';
import * as fromCounter from '../store/counter';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let loadingStore: Store<fromLoading.LoadingState>;
  let counterStore: Store<fromCounter.CounterFeatureState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTabsModule,
        MatButtonModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(fromLoading.FEATURE_NAME, fromLoading.reducers),
        StoreModule.forFeature(fromCounter.FEATURE_NAME, fromCounter.reducers),
      ],
      declarations: [
        MainComponent,
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture      = TestBed.createComponent(MainComponent);
    component    = fixture.componentInstance;
    loadingStore = TestBed.get(Store);
    counterStore = TestBed.get(Store);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('show', () => {
    it('success', () => {
      // setup
      spyOn(loadingStore, 'dispatch').and.callThrough();

      // exercise
      component.show();

      // verify
      expect(loadingStore.dispatch).toHaveBeenCalledWith({ type: fromLoading.LoadingActionType.Show });
    });
  });

  describe('hide', () => {
    it('success', () => {
      // setup
      spyOn(loadingStore, 'dispatch').and.callThrough();

      // exercise
      component.hide();

      // verify
      expect(loadingStore.dispatch).toHaveBeenCalledWith({ type: fromLoading.LoadingActionType.Hide });
    });
  });

  describe('increment', () => {
    it('success', () => {
      // setup
      spyOn(counterStore, 'dispatch').and.callThrough();

      // exercise
      component.increment();

      // verify
      expect(counterStore.dispatch).toHaveBeenCalledWith({ type: fromCounter.CounterActionType.Increment });
    });
  });

  describe('decrement', () => {
    it('success', () => {
      // setup
      spyOn(counterStore, 'dispatch').and.callThrough();

      // exercise
      component.decrement();

      // verify
      expect(counterStore.dispatch).toHaveBeenCalledWith({ type: fromCounter.CounterActionType.Decrement });
    });
  });

  describe('reset', () => {
    it('success', () => {
      // setup
      spyOn(counterStore, 'dispatch').and.callThrough();

      // exercise
      component.reset();

      // verify
      expect(counterStore.dispatch).toHaveBeenCalledWith({ type: fromCounter.CounterActionType.Reset });
    });
  });
});
