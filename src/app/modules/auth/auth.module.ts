import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './pages/login/login.component';
import { ResetpasswordComponent } from '../auth/pages/resetpassword/resetpassword.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [
    ResetpasswordComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatIconModule
  ]
})
export class AuthModule { }
