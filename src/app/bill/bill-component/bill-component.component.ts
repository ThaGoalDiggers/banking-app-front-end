import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/account/account.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-bill-component',
  templateUrl: './bill-component.component.html',
  styleUrls: ['./bill-component.component.css']
})
export class BillsComponentComponent implements OnInit {


  bills: Object;

  constructor(private accountService: AccountService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.bills = params.id);
  }


  ngOnInit() {
    this.getBill();
  }

  getBill() {
    return  this.accountService.getBillsByAccountId(this.accountService.accountId)
    .subscribe(res => this.bills = res);
  }


}
