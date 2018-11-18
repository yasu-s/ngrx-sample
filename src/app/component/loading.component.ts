import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState, getLoading } from '../store';

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
  constructor(private store: Store<AppState>) {
    this.isLoading$ = store.select(getLoading);
  }
}
