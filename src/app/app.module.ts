import { ResetpasswordComponent } from './modules/auth/pages/resetpassword/resetpassword.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { HomeComponent } from './modules/home/pages/home-page/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarMenuModule } from 'angular-sidebar-menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { GeneralInfoService } from './shared/services/general-info.service';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';

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
    NgbModule,
  ],
  /*exports: [
    LoginComponent,
    ResetpasswordComponent
  ],*/
  providers: [GeneralInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
