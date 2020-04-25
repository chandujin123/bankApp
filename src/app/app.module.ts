import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms';
import { AppPageComponent } from './app-page/app-page.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { GetCustomerComponent } from './get-customer/get-customer.component';
import { TrancationComponent } from './trancation/trancation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppPageComponent,
    AddCustomerComponent,
    GetCustomerComponent,
    TrancationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
