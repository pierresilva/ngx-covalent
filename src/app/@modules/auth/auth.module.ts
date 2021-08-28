import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
import { AuthRequestNewPasswordComponent } from './auth-request-new-password/auth-request-new-password.component';
import { AuthSaveNewPasswordComponent } from './auth-save-new-password/auth-save-new-password.component';
import {MaterialModule} from '@app/material.module';
import {SharedModule} from '@shared';


@NgModule({
  declarations: [
    AuthLoginComponent,
    AuthRegisterComponent,
    AuthRequestNewPasswordComponent,
    AuthSaveNewPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class AuthModule { }
