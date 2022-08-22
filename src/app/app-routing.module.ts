import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/modules/auth/pages/login/login.component';
import { ResetpasswordComponent } from '../app/modules/auth/pages/resetpassword/resetpassword.component';
import { HomeComponent } from '../app/modules/home/pages/home-page/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: "login", component: LoginComponent},
  {path: "resetpassword", component: ResetpasswordComponent},
  {path: 'home', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
