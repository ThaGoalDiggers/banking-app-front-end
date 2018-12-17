import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {



customerAccountsUrl = '/customers/{customerId}/accounts';


constructor(private http: HttpClient) { }

getCustomer(customerId) {
  return this
         .http
         .get(`${this.customerAccountsUrl + customerId}`);
}



}
