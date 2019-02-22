import { TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';

import { CounterComponent } from './counter.component';
import { CounterFeatureState, CounterStoreModule, CounterActionType } from '../store/counter';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let store: Store<CounterFeatureState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        CounterStoreModule,
      ],
      providers: [
        CounterComponent,
      ],
    });

    component = TestBed.get(CounterComponent);
    store     = TestBed.get(Store);
  });

  it('should be created', () => {
    expect(component).toBeDefined();
  });

  describe('count$', () => {
    it('success', done => {
      // setup

      // exercise
      store.dispatch({ type: CounterActionType.Increment });

      // verify
      component.count$.subscribe(data => {
        expect(data).toBe(1);
        done();
      });
    });
  });
});
