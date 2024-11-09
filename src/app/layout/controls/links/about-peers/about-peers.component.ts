import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { LinksService } from 'src/app/shared/services/Links.service';

@Component({
  selector: 'app-about-peers',
  templateUrl: './about-peers.component.html',
  styleUrls: ['./about-peers.component.scss']
})
export class AboutPeersComponent {
  subscriptions:Subscription[] = []
  rawHtmlContent: string = '';
  sanitizedHtmlContent!: SafeHtml;   
constructor(private linksServ:LinksService,private sanitizer: DomSanitizer ) {}
  ngOnInit(): void {
    this.getAboutData()
  }
  getAboutData() {
    const subs = this.linksServ.GetAboutApp().subscribe((resp:any)=> {
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
