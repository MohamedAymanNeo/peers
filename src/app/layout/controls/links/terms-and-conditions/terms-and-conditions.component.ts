import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { LinksService } from 'src/app/shared/services/Links.service';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent {
  subscriptions:Subscription[] = []
  rawHtmlContent: string = '';     
  sanitizedHtmlContent!: SafeHtml;   
constructor(private linksServ:LinksService,private sanitizer: DomSanitizer ) {}
  ngOnInit(): void {
    this.getTermsData()
  }
  getTermsData() {
    const subs = this.linksServ.GetTerms().subscribe((resp:any)=> {
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
