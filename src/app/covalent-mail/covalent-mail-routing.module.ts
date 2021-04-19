import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CovalentMailComponent} from '@app/covalent-mail/covalent-mail.component';

const routes: Routes = [
  {
    path: '',
    component: CovalentMailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovalentMailRoutingModule { }
