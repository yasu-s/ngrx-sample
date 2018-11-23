import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { LoadingFeatureState, getLoading } from '../store/loading';

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
  constructor(store: Store<LoadingFeatureState>) {
    this.isLoading$ = store.select(getLoading);
  }
}
