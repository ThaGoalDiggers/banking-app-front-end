import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import {map} from 'rxjs/operators'


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

customerId: number;

constructor(private http: HttpClient) { }

getCustomer(id: number): Observable<Object> {
let url = 'http://localhost:8080/customers/' + this.customerId;
return this.http.get(url) ;
  
}

getAccountsByCustomerId(id: number): Observable<Object>{
  this.customerId = id;
  let url = 'http://localhost:8080/customers/'+this.customerId+'/accounts';
   return this.http.get(url) ;
  
}



}
