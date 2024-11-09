import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksRoutingModule } from './links-routing.module';
import { PrivacyComponent } from '../privacy/privacy.component';
import { AboutPeersComponent } from '../about-peers/about-peers.component';
import { TermsAndConditionsComponent } from '../terms-and-conditions/terms-and-conditions.component';


@NgModule({
  declarations: [
    PrivacyComponent,
    AboutPeersComponent,
    TermsAndConditionsComponent,
  ],
  imports: [
    CommonModule,
    LinksRoutingModule
  ]
})
export class LinksModule { }
