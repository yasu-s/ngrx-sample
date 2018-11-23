import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { CounterFeatureState, getCount } from '../store/counter';

@Component({
  selector: 'custom-counter',
  template: `
    <div>{{ count$ | async }}</div>
  `
})
export class CounterComponent {

  /** */
  count$: Observable<number>;

  /**
   *
   * @param store
   */
  constructor(store: Store<CounterFeatureState>) {
    this.count$ = store.pipe(select(getCount));
  }
}
