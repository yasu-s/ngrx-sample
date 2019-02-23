import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { LoadingActionType, LoadingState } from '../store/loading';
import { CounterActionType, CounterState } from '../store/counter';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent {

  /** 遅延時間 */
  delayTime = 3000;

  /**
   *
   * @param loadingStore
   * @param counterStore
   */
  constructor(private loadingStore: Store<LoadingState>, private counterStore: Store<CounterState>) {
  }

  show(): void {
    this.loadingStore.dispatch({ type: LoadingActionType.Show });
  }

  hide(): void {
    this.loadingStore.dispatch({ type: LoadingActionType.Hide });
  }

  delay(): void {
    this.loadingStore.dispatch({ type: LoadingActionType.Show });

    of(null).pipe(delay(this.delayTime)).subscribe(_ => {
      this.loadingStore.dispatch({ type: LoadingActionType.Hide });
    });
  }

  increment(): void {
    this.counterStore.dispatch({ type: CounterActionType.Increment });
  }

  decrement(): void {
    this.counterStore.dispatch({ type: CounterActionType.Decrement });
  }

  reset(): void {
    this.counterStore.dispatch({ type: CounterActionType.Reset });
  }

}
