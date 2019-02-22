import { TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';

import { MainComponent } from './main.component';
import * as fromLoading from '../store/loading';
import * as fromCounter from '../store/counter';

describe('MainComponent', () => {
  let component: MainComponent;
  let loadingStore: Store<fromLoading.LoadingState>;
  let counterStore: Store<fromCounter.CounterFeatureState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(fromLoading.FEATURE_NAME, fromLoading.reducers),
        StoreModule.forFeature(fromCounter.FEATURE_NAME, fromCounter.reducers),
      ],
      providers: [
        MainComponent,
      ],
    });

    component    = TestBed.get(MainComponent);
    loadingStore = TestBed.get(Store);
    counterStore = TestBed.get(Store);
  });

  it('should be created', () => {
    expect(component).toBeDefined();
  });

  describe('show', () => {
    it('success', () => {
      // setup
      loadingStore.dispatch = jasmine.createSpy();

      // exercise
      component.show();

      // verify
      expect(loadingStore.dispatch).toHaveBeenCalledWith({ type: fromLoading.LoadingActionType.Show });
    });
  });

  describe('hide', () => {
    it('success', () => {
      // setup
      loadingStore.dispatch = jasmine.createSpy();

      // exercise
      component.hide();

      // verify
      expect(loadingStore.dispatch).toHaveBeenCalledWith({ type: fromLoading.LoadingActionType.Hide });
    });
  });

  describe('increment', () => {
    it('success', () => {
      // setup
      counterStore.dispatch = jasmine.createSpy();

      // exercise
      component.increment();

      // verify
      expect(counterStore.dispatch).toHaveBeenCalledWith({ type: fromCounter.CounterActionType.Increment });
    });
  });

  describe('decrement', () => {
    it('success', () => {
      // setup
      counterStore.dispatch = jasmine.createSpy();

      // exercise
      component.decrement();

      // verify
      expect(counterStore.dispatch).toHaveBeenCalledWith({ type: fromCounter.CounterActionType.Decrement });
    });
  });

  describe('reset', () => {
    it('success', () => {
      // setup
      counterStore.dispatch = jasmine.createSpy();

      // exercise
      component.reset();

      // verify
      expect(counterStore.dispatch).toHaveBeenCalledWith({ type: fromCounter.CounterActionType.Reset });
    });
  });
});
