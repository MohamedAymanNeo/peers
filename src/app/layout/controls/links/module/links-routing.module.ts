import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyComponent } from '../privacy/privacy.component';
import { TermsAndConditionsComponent } from '../terms-and-conditions/terms-and-conditions.component';
import { AboutPeersComponent } from '../about-peers/about-peers.component';

const routes: Routes = [
  {
    path:'privacy',
    component:PrivacyComponent
  },
  {
    path:'terms',
    component:TermsAndConditionsComponent
  },
  {
    path:'about-peers',
    component:AboutPeersComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinksRoutingModule { }
