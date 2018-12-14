import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer-component/customer.component';
import { AccountComponent } from './account/account-component/account.component';
import { BillsComponentComponent } from './bill/bill-component/bill-component.component';
import { TransactionComponent } from './transaction/transaction/transaction.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerComponent,
    AccountComponent,
    BillsComponentComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
