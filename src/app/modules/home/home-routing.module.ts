import { HomeComponent } from './../../modules/home/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ActiveCreditsComponent } from './pages/active-credits/active-credits.component';
import { ClosedCreditsComponent } from './pages/closed-credits/closed-credits.component';
import { AddUserComponent } from './pages/add-user/add-user.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent},
      { path: 'activecredits', component: ActiveCreditsComponent},
      { path: 'closedcredits', component: ClosedCreditsComponent},
      { path: 'adduser', component: AddUserComponent},
      { path: '', redirectTo: ''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
