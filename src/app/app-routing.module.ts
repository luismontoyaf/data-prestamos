import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/modules/home/pages/home-page/home.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  { path: 'resetpassword', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  { path: 'home', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
