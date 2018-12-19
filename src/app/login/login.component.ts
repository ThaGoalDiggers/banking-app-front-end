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
  
  constructor(private customerService: CustomerService) {
   
  }

  ngOnInit() {}

  loadAccounts(id: number) {
    this.customerService.customerId = id;
  }
 



}
