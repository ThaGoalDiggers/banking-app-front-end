import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class LoginService {




  constructor(private http: HttpClient) {}

  loadCustomerById(id: number) {
    return this.http.get('https://localhost:8080/customers/' + id);
  }

}
