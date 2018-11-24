import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';

import { CounterComponent } from './counter.component';
import { CounterFeatureState, CounterStoreModule, CounterActionType } from '../store/counter';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let store: Store<CounterFeatureState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        CounterStoreModule,
      ],
      declarations: [
        CounterComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    store     = TestBed.get(Store);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
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
