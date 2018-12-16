import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Customer} from './customer'


@Injectable({
  providedIn: 'root'
})
export class CustomerService {



customerUrl = 'http://localhost8080/customers';


constructor(private http: HttpClient) { }

getCustomers() {
  return this
         .http
         .get(`${this.customerUrl}`);
}



}
