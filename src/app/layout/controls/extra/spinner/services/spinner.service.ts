import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  showSpinner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {}
  // set spinner show and hide val
  
  setSpinner(val: any) {
    this.showSpinner.next(val);
  }
}
