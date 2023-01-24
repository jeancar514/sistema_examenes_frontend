import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/form-login/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormLoginComponent } from './pages/form-login/form-login.component';
import { RegisterComponent } from './pages/form-login/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AlertComponent } from './components/alert/alert.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './pages/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    FormLoginComponent,
    RegisterComponent,
    AlertComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //angular Material
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    ///
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
