import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer/customer.service';

@Component({
  selector: 'app-bill-component',
  templateUrl: './bill-component.component.html',
  styleUrls: ['./bill-component.component.css']
})
export class BillsComponentComponent implements OnInit {
  
  
  id: number;

  constructor(private customerService: CustomerService) {}
   

  ngOnInit() {
  }
}
