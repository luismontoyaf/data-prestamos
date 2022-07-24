import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/components/login/login.component';
import { ResetpasswordComponent } from './pages/auth/components/resetpassword/resetpassword.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "resetpassword", component: ResetpasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
