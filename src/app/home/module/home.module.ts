import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AboutComponent } from '../childreen/about/about.component';
import { AdvantagesComponent } from '../childreen/advantages/advantages.component';
import { DownloadAppComponent } from '../childreen/download-app/download-app.component';
import { FqaComponent } from '../childreen/fqa/fqa.component';
import { ContactComponent } from '../childreen/contact/contact.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    AboutComponent,
    AdvantagesComponent,
    DownloadAppComponent,
    FqaComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule
  ],
  exports:[
    HomeComponent
  ]

})
export class HomeModule { }
