import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLoginComponent } from '@modules/auth/auth-login/auth-login.component';
import { AuthRegisterComponent } from '@modules/auth/auth-register/auth-register.component';
import { AuthRequestNewPasswordComponent } from '@modules/auth/auth-request-new-password/auth-request-new-password.component';
import { AuthSaveNewPasswordComponent } from '@modules/auth/auth-save-new-password/auth-save-new-password.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLoginComponent
  },
  {
    path: 'register',
    component: AuthRegisterComponent
  },
  {
    path: 'request-new-password',
    component: AuthRequestNewPasswordComponent
  },
  {
    path: 'save-new-password/:token',
    component: AuthSaveNewPasswordComponent
  },
  {
    path: 'save-new-password',
    component: AuthSaveNewPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
