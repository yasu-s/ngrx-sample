import { TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';

import { LoadingComponent } from './loading.component';
import { LoadingFeatureState, LoadingStoreModule, LoadingActionType } from '../store/loading';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let store: Store<LoadingFeatureState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        LoadingStoreModule,
      ],
      providers: [
        LoadingComponent,
      ],
    });

    component = TestBed.get(LoadingComponent);
    store     = TestBed.get(Store);
  });

  it('should be created', () => {
    expect(component).toBeDefined();
  });

  describe('isLoading$', () => {
    it('success', done => {
      // setup

      // exercise
      store.dispatch({ type: LoadingActionType.Show });

      // verify
      component.isLoading$.subscribe(data => {
        expect(data).toBeTruthy();
        done();
      });
    });
  });
});
