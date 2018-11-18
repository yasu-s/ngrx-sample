import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, LoadingActionType } from '../store';

@Component({
  selector: 'app-main',
  template: `
    <h2>Ngrx Sample</h2>
    <div>
      <div>
        <button (click)="show()">Show</button>
        <button (click)="hide()">Hide</button>
      </div>
      <div>
        <custom-loading></custom-loading>
      </div>
    </div>
  `
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
}
