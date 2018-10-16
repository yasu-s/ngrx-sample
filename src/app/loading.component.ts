import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { State } from './store';

@Component({
  selector: 'custom-loading',
  template: `
    <mat-spinner *ngIf="isLoading$ | async"></mat-spinner>
  `
})
export class LoadingComponent {

  /** */
  isLoading$: Observable<boolean>;

  /**
   *
   * @param store
   */
  constructor(private store: Store<State>) {
    this.isLoading$ = store.select(s => s.loading);
  }
}
