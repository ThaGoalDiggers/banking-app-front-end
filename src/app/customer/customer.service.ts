import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

customerId: number;

accountId: number;


constructor(private http: HttpClient) { }

getAccountsByCustomerId(id: number): Observable<Object>{
  this.customerId = id;
  let url = 'http://localhost:8080/customers/'+this.customerId+'/accounts';
   return this.http.get(url) ;
  
}

getBillsByAccountId(id:number):Observable<Object>{
 id = this.accountId;
let url = 'http://localhost:8080//accounts/'+id+'/bills'
return this.http.get(url);
}


}
