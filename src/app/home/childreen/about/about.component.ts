import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { FqaService } from 'src/app/shared/services/fqa.service';
import { TranslationService } from 'src/app/shared/translation/translation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  subscriptions:Subscription[] = []
  sliderList:any=[]
constructor(private fqaServ: FqaService,private translateServ:TranslationService) {}
ngOnInit(): void {
  const subs = this.translateServ.activeLang.subscribe((lang:string)=> {
    this.getSliderDataList()
  })
  this.subscriptions.push(subs)
}
getSliderDataList() {
  const subs = this.fqaServ.getSliderData().subscribe((resp:any)=> {
    if(resp.success) {
      this.sliderList = resp.result
    }
  })
  this.subscriptions.push(subs)

}
ngOnDestroy(){
  this.subscriptions.forEach(subs=>subs.unsubscribe())
}

  
}
