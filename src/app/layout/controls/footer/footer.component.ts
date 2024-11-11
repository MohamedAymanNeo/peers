import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LinksService } from 'src/app/shared/services/Links.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  subscriptions:Subscription[] = []
  footerData: any = [];
  constructor(private linkService: LinksService) { }

  ngOnInit(): void {
    this.getSocialData()
  }

  getSocialData() {
    const subs = this.linkService.GetSocials().subscribe((resp:any)=> {
      if(resp.success) {
        this.footerData = resp.result;
       console.log(resp.result);
       
      };
      this.subscriptions.push(subs)
    })
  }
}
