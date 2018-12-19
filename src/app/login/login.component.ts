import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer/customer.service';


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
