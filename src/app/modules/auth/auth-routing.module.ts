import { ResetpasswordComponent } from './pages/resetpassword/resetpassword.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',
  children: [
    { path: 'login', component: LoginComponent},
    { path: 'resetpassword', component: ResetpasswordComponent},
    { path: '**', redirectTo: 'login'}
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
