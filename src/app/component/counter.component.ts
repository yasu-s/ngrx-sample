import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState, getCount } from '../store';

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
  constructor(private store: Store<AppState>) {
    this.count$ = store.select(getCount);
  }
}
