import {Component, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  template: ''
})
export abstract class DestroyBase implements OnDestroy {
  destroy$ = new Subject();

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
