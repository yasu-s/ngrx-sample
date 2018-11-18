import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, LoadingActionType, CounterActionType } from '../store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent {

  /**
   *
   * @param store
   */
  constructor(private store: Store<AppState>) {
  }

  show(): void {
    this.store.dispatch({ type: LoadingActionType.Show });
  }

  hide(): void {
    this.store.dispatch({ type: LoadingActionType.Hide });
  }

  increment(): void {
    this.store.dispatch({ type: CounterActionType.Increment });
  }

  decrement(): void {
    this.store.dispatch({ type: CounterActionType.Decrement });
  }

  reset(): void {
    this.store.dispatch({ type: CounterActionType.Reset });
  }

}
