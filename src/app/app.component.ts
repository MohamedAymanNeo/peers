import { Component } from '@angular/core';
import { TranslationService } from './shared/translation/translation.service';
import { TranslateService } from '@ngx-translate/core';
const LOCALIZATION_LOCAL_STORAGE_KEY = 'language';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'peers';
  showSpinner = true;
  constructor(translate: TranslateService,
    private translationService: TranslationService,) {
    // this.translationService.setLanguage('ar');
    // debugger
    const lang = localStorage.getItem(LOCALIZATION_LOCAL_STORAGE_KEY);
    if (lang) {
      // setTimeout(() => {
        translate.use(lang);
        this.translationService.setHtmlDir()
        
      // }, 500);

    }
  }
  
}
