import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {CustomerService } from '../customer.service';
import { from } from 'rxjs';

import {ActivatedRoute} from '@angular/router'




@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {
   customers: Object;
  
  allAccounts: Object;
  


  constructor(private customerService: CustomerService, private route:ActivatedRoute) {
    this.route.params.subscribe(params => this.allAccounts = params.id)
    
  }


  ngOnInit() {
 this.getAccounts(this.customerService.customerId);
 this.getCustomer(this.customerService.customerId);
  }

  getCustomer(customerId: number) {
    this.customerService.getCustomer(customerId).subscribe(
      customer => {this.customers = customer;}
    )
    }

  getAccounts(customerId:number){
    return this.customerService.getAccountsByCustomerId(customerId)
    .subscribe( data => {this.allAccounts = data});
  }

}
