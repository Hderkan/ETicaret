import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { DeleteDirective } from './directives/admin/delete.directive';
import { DeleteDialogComponent } from './dialogs/delete-dialog/delete-dialog.component';
// import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent


  ],
  imports: [
    BrowserModule,
    // CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AdminModule, UiModule, BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule

  ],
  providers: [
    { provide: "baseUrl", useValue: "https://localhost:7141/api", multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
