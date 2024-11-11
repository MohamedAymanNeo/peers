import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LinksService } from 'src/app/shared/services/Links.service';
import { TranslationService } from 'src/app/shared/translation/translation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  subscriptions:Subscription[] = []
  contactDetails: any = [];
  socialLinks: any = [];
  constructor(private linkService: LinksService,private translateServ:TranslationService) { }

  ngOnInit(): void {
    const subs = this.translateServ.activeLang.subscribe((lang:string)=> {
      this.getSocialData()
    })
    this.subscriptions.push(subs)
  }

  getSocialData() {
    const subs = this.linkService.GetContactDetails().subscribe((resp:any)=> {
      if(resp.success) {
        this.socialLinks = resp.result.socialLinks;
        this.contactDetails = resp.result.contactInfo;
       console.log(resp.result);
       
      };
      this.subscriptions.push(subs)
    })
  }
}
