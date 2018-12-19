import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { CustomerComponent} from './customer/customer-component/customer.component';
import { BillsComponentComponent } from './bill/bill-component/bill-component.component';

export const routes: Routes = [
   {
     path: '',
     redirectTo: 'login',
     pathMatch: 'full'
   },
   {
     path: 'login',
     component: LoginComponent
   },
   {
     path: 'customers',
     component: CustomerComponent
   },
   {
    path: 'account/bills',
    component: BillsComponentComponent
   }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule {}
