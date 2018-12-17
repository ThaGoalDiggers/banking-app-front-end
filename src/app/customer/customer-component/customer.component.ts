import { Component, OnInit } from '@angular/core';
import {CustomerService } from '../customer.service';
import { from } from 'rxjs';
import { Customer } from '../customer';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) {}


  ngOnInit() {
  }

}
