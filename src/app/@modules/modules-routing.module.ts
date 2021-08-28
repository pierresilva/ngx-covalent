import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutAuthComponent} from '@layouts/layout-auth/layout-auth.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule),
  },
  {
    path: 'auth',
    component: LayoutAuthComponent,
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ModulesRoutingModule {
}
