import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { State, LoadingActionType } from './store';

@Component({
  selector: 'app-root',
  template: `
    <h2>Ngrx Sample</h2>
    <div>
      <custom-loading></custom-loading>
    </div>
    <div>
      <button (click)="show()">Show</button>
      <button (click)="hide()">Hide</button>
    </div>
  `
})
export class AppComponent {

  /**
   *
   * @param store
   */
  constructor(private store: Store<State>) {
  }

  show(): void {
    this.store.dispatch({ type: LoadingActionType.Show });
  }

  hide(): void {
    this.store.dispatch({ type: LoadingActionType.Hide });
  }
}
