import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarMenuModule } from 'angular-sidebar-menu';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
