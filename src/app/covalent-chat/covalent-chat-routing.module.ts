import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CovalentChatComponent} from '@app/covalent-chat/covalent-chat.component';

const routes: Routes = [
  {
    path: '',
    component: CovalentChatComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovalentChatRoutingModule { }
