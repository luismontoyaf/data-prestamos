import { LoginComponent } from './pages/login/login.component';
import { ResetpasswordComponent } from '../auth/pages/resetpassword/resetpassword.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatIconModule
  ],

  declarations: [
    LoginComponent,
    ResetpasswordComponent
  ]
  
})
export class AuthModule { }
