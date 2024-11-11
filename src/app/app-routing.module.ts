import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./layout/module/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
