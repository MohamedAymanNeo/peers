import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { FqaService } from 'src/app/shared/services/fqa.service';
import { TranslationService } from 'src/app/shared/translation/translation.service';

@Component({
  selector: 'app-fqa',
  templateUrl: './fqa.component.html',
  styleUrls: ['./fqa.component.scss']
})
export class FqaComponent implements OnInit, OnDestroy{
  subscriptions:Subscription[] = []
  fqaList:any=[]
constructor(private fqaServ: FqaService,private translateServ:TranslationService) {}
ngOnInit(): void {
  const subs = this.translateServ.activeLang.subscribe((lang:string)=> {
    this.getFQAList()
  })
  this.subscriptions.push(subs)
}
getFQAList() {
  const subs = this.fqaServ.GetFQA().subscribe((resp:any)=> {
    if(resp.success) {
      this.fqaList = resp.result.data
      this.fqaList.forEach((item:any, index:number) => {
        item.collapseId = `collapse-${index + 1}`;
    });
      
    }
  })
  this.subscriptions.push(subs)

}
ngOnDestroy(){
  this.subscriptions.forEach(subs=>subs.unsubscribe())
}
}
