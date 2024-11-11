import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from '../controls/header/header.component';
import { FooterComponent } from '../controls/footer/footer.component';
import { LayoutComponent } from '../layout.component';
import { HomeModule } from 'src/app/home/module/home.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HomeModule,
    TranslateModule,
    
  ],
  exports:[
    
  ]
})
export class LayoutModule { }
