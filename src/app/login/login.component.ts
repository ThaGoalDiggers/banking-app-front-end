import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id: number;

  constructor(private accountService: AccountService) { }

  ngOnInit() {}

  loadAccounts(id: number) {
    this.accountService.customerId = id;
  }


}
