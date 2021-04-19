import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CovalentContactsComponent} from '@app/covalent-contacts/covalent-contacts.component';

const routes: Routes = [
  {
    path: '',
    component: CovalentContactsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovalentContactsRoutingModule { }
