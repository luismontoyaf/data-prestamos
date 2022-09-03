import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SidenavComponent } from 'src/app/shared/components/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ActiveCreditsComponent } from './pages/active-credits/active-credits.component';
import { ClosedCreditsComponent } from './pages/closed-credits/closed-credits.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    HomeComponent,
<<<<<<< HEAD
    SidenavComponent
=======
    SidenavComponent,
    ActiveCreditsComponent,
    ClosedCreditsComponent,
    AddUserComponent,
    DashboardComponent
>>>>>>> cbafd23ec11397dc0f0b9554811e5529aa849e33
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
<<<<<<< HEAD
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
=======
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatListModule
>>>>>>> cbafd23ec11397dc0f0b9554811e5529aa849e33
  ]
})
export class HomeModule { }
