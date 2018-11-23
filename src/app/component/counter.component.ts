import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { CounterRootState, getCount } from '../store';

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
  constructor(private store: Store<CounterRootState>) {
    this.count$ = store.pipe(select(getCount));
  }
}
