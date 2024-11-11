import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AboutComponent } from 'src/app/home/childreen/about/about.component';
import { AdvantagesComponent } from 'src/app/home/childreen/advantages/advantages.component';
import { TranslationService } from 'src/app/shared/translation/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  
  constructor(private translationService: TranslationService, public translate: TranslateService,private router: Router) {
  }
  
  toggleLang() {
    this.translationService.toggleLang();
  }
  scrollToSection(eleId: any) {
    const element = document.getElementById(eleId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
