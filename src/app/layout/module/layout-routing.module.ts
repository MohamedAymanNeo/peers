import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout.component';
import { PrivacyComponent } from '../controls/links/privacy/privacy.component';
import { HomeComponent } from 'src/app/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
          path: '',
          pathMatch:'full',  
          redirectTo:'/',
      },
      {
        path: '',
        loadChildren: () =>
          import('../../home/module/home.module').then((m) => m.HomeModule),

      },
      {
        path: 'pages',
        loadChildren: () =>
          import('../controls/links/module/links.module').then((m) => m.LinksModule),

      },
      
      
      
      
    ]}
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
