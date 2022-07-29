import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarMenuModule } from 'angular-sidebar-menu';
import { LoginComponent } from './pages/auth/components/login/login.component';
import { ResetpasswordComponent } from './pages/auth/components/resetpassword/resetpassword.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    LoginComponent,
    ResetpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
  ],
  /*exports: [
    LoginComponent,
    ResetpasswordComponent
  ],*/
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
