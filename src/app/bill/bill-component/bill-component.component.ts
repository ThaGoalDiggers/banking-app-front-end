import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer/customer.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-bill-component',
  templateUrl: './bill-component.component.html',
  styleUrls: ['./bill-component.component.css']
})
export class BillsComponentComponent implements OnInit {
  

  bills: Object;

  constructor(private customerService: CustomerService, private route:ActivatedRoute) {
   this.route.params.subscribe(params => this.bills = params.id);
    
  }
   

  ngOnInit() {
    this.getBill();
  }

  getBill(){
    return  this.customerService.getBillsByAccountId(this.customerService.accountId)
    .subscribe(res=>this.bills=res);
  }


}
