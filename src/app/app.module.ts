import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { AccountComponent } from './account/account/account.component';
import { BillsComponentComponent } from './bills/bills-component/bills-component.component';
import { TransactionComponent } from './transaction/transaction/transaction.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
