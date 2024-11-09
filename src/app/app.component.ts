import { Component } from '@angular/core';
import { TranslationService } from './shared/translation/translation.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'peers';
  constructor() {
  }
  
}
