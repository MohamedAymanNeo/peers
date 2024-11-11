// Localization is based on '@ngx-translate/core';
// Please be familiar with official documentations first => https://github.com/ngx-translate/core

import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

export interface Locale {
  lang: string;
  data: any;
}

export const LOCALIZATION_LOCAL_STORAGE_KEY = 'language';

@Injectable()
export class TranslationService {
  activeLang: BehaviorSubject<string> = new BehaviorSubject<string>('ar');
  // Private properties
  private langIds: any = [];

  constructor(private translate: TranslateService) {
      // add new langIds to the list
    this.translate.addLangs(['en', 'ar']);

    // this language will be used as a fallback when a translation isn't found in the current language
    const lang = localStorage.getItem(LOCALIZATION_LOCAL_STORAGE_KEY)
    this.setLanguage(lang || translate.defaultLang)
  }

  loadTranslations(...args: Locale[]): void {
    const locales = [...args];

    locales.forEach((locale) => {
      // use setTranslation() with the third argument set to true
      // to append translations instead of replacing them
      this.translate.setTranslation(locale.lang, locale.data, true);

      this.langIds.push(locale.lang);
    });

    // add new languages to the list
    this.translate.addLangs(this.langIds);
  }

  setLanguage(lang: string) {
    if (lang) {
      // this.translate.currentLang  = lang;
      this.translate.setDefaultLang(lang);
      // the lang to use, if the lang isn't available, it will use the current loader to get them
      this.translate.use(lang);
      localStorage.setItem(LOCALIZATION_LOCAL_STORAGE_KEY, lang);
    }
  }

  /**
   * Returns selected language
   */
  getSelectedLanguage(): any {
    return (
      localStorage.getItem(LOCALIZATION_LOCAL_STORAGE_KEY) ||
      this.translate.getDefaultLang()
    );
  }
  toggleLang() {
    const currentLang = this.translate.currentLang == 'ar' ? 'en' : 'ar';
    this.setLanguage(currentLang);
    this.activeLang.next(currentLang);
    this.setHtmlDir();
  }
  setHtmlDir() {
    // debugger
    const htmlTag = document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    if(localStorage.getItem(LOCALIZATION_LOCAL_STORAGE_KEY) == 'ar'){
      htmlTag.dir = 'rtl';
      htmlTag.lang = 'ar';
    } else {
      htmlTag.dir = 'ltr';
      htmlTag.lang = 'en';
    }
   
  }
}
