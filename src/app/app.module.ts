import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { AddBookDialog, BookStoreComponent, EditBookDialog } from './book-store/book-store.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BookDetailsDialog, DashboardComponent } from './dashboard/dashboard.component';
import { LoginpageComponent } from './auth/loginpage/loginpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BookStoreComponent,
    SideNavComponent,
    DashboardComponent,
    BookDetailsDialog,
    AddBookDialog,
    EditBookDialog,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
