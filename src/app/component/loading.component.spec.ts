import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MatProgressSpinnerModule } from '@angular/material';
import { StoreModule, Store } from '@ngrx/store';

import { LoadingComponent } from './loading.component';
import { LoadingFeatureState, LoadingStoreModule, LoadingActionType } from '../store/loading';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;
  let store: Store<LoadingFeatureState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatProgressSpinnerModule,
        StoreModule.forRoot({}),
        LoadingStoreModule,
      ],
      declarations: [
        LoadingComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    store     = TestBed.get(Store);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
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
