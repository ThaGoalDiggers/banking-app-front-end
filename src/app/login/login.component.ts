import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import { CustomerService } from '../customer/customer.service';
import { CustomerComponent } from '../customer/customer-component/customer.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  id: number;
  allAccounts: Object;
  customers: Object;
  constructor(private customerService: CustomerService) {
   
  }

  ngOnInit() {}

  loadAccounts(id: number) {
    this.customerService.getAccountsByCustomerId(id).subscribe(
      data =>this.allAccounts = data );
  }
  loadCustomer(id: number) {
    this.customerService.getCustomer(id).subscribe(
      data =>this.customers = data );
  }

  onClick(id: number){
    this.loadAccounts(id);
    this.loadCustomer(id);  
  }

}
