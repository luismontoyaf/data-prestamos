import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SidenavComponent } from 'src/app/shared/components/sidenav/sidenav.component';


@NgModule({
  declarations: [
    HomeComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
  ]
})
export class HomeModule { }
