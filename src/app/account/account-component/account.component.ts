import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {


  allAccounts: Object;



  constructor(private accountService: AccountService, public route: ActivatedRoute) {
    this.route.params.subscribe(params => this.allAccounts = params.id);
  }


  ngOnInit() {
    this.getAccounts(this.accountService.customerId);
  }


  getAccounts(customerId: number) {
    return this.accountService.getAccountsByCustomerId(customerId)
    .subscribe( data => {
      this.allAccounts = data;
    });
  }


  deleteAccount(accountId: number) {
    this.accountService.deleteAccountById(accountId);
  }


  setAccountId(id: number) {
    this.accountService.accountId = id;
  }


}
