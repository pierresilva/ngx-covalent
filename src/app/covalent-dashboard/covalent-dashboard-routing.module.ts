import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovalentDashboardComponent } from './covalent-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: CovalentDashboardComponent
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
export class CovalentDashboardRoutingModule { }
