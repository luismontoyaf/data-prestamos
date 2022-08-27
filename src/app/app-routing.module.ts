import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full'},
  { path: 'auth', loadChildren: () => import('../app/modules/auth/auth.module').then( m => m.AuthModule)},
  { path: 'dashboard', loadChildren: () => import('../app/modules/home/home.module').then( m => m.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
