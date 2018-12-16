import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) { }

  getCustomerView(customerId : number ) : Observable<any>{
    return this.http.get('http://localhost:8080/customer/' + customerId);
  }
  

}
