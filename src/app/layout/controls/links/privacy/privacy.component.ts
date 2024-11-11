import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { LinksService } from 'src/app/shared/services/Links.service';
import { TranslationService } from 'src/app/shared/translation/translation.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent {
  subscriptions:Subscription[] = []
  rawHtmlContent: string = '';     
  sanitizedHtmlContent!: SafeHtml; 
constructor(private linksServ:LinksService,private sanitizer: DomSanitizer,private translateServ:TranslationService ) {}
  ngOnInit(): void {
    const subs = this.translateServ.activeLang.subscribe((lang:string)=> {
      this.getPrivacyData()
    })
    this.subscriptions.push(subs)
  }
  getPrivacyData() {
    const subs = this.linksServ.GetPrivacy().subscribe((resp:any)=> {
      if(resp.success) {
        this.rawHtmlContent = resp.result.description; 
        this.sanitizedHtmlContent = this.sanitizer.bypassSecurityTrustHtml(this.modifyHtml(this.rawHtmlContent));
      };
      this.subscriptions.push(subs)
    })
  }
  modifyHtml(html: string): string {
    return html.replace(/<p>/g, '<p class="custom-class">');
  }
  ngOnDestroy(){
    this.subscriptions.forEach(subs=>subs.unsubscribe())
  }
}
