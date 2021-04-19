import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CovalentLandingComponent} from '@app/covalent-landing/covalent-landing.component';

const routes: Routes = [
  {
    path: '',
    component: CovalentLandingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovalentLandingRoutingModule {
}
