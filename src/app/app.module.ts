
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarMenuModule } from 'angular-sidebar-menu';
import { GeneralInfoService } from './shared/services/general-info.service';
<<<<<<< HEAD
=======

>>>>>>> cbafd23ec11397dc0f0b9554811e5529aa849e33

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarMenuModule,
    NgbModule,
  ],

  providers: [GeneralInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
