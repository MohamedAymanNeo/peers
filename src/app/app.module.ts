import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './shared/core.module';
import { PrivacyComponent } from './layout/controls/links/privacy/privacy.component';
import { AboutPeersComponent } from './layout/controls/links/about-peers/about-peers.component';
import { TermsAndConditionsComponent } from './layout/controls/links/terms-and-conditions/terms-and-conditions.component';
@NgModule({
  declarations: [
    AppComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
