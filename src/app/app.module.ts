import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account-component/account.component';
import { BillsComponentComponent } from './bill/bill-component/bill-component.component';

import { AccountService } from './account/account.service';

const appRoutes: Routes = [
  { path: 'customer/:id', component: AccountComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    BillsComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
