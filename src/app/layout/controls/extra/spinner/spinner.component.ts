import { Component, OnDestroy } from '@angular/core';
import { SpinnerService } from './services/spinner.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnDestroy {
  subscriptions:Subscription[] = []

  // variable
  showSpinner!: boolean;

  constructor(private SpinnerService: SpinnerService) {
    const subs = this.SpinnerService.showSpinner.subscribe((res: any) => {
      this.showSpinner = res;
    });
    this.subscriptions.push(subs)
  }
  ngOnDestroy(){
    this.subscriptions.forEach(subs=>subs.unsubscribe())
  }

}
