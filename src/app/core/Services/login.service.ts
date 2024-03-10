import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { Auth } from '../models/auth.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  readonly url ="https://localhost:7004/api/";
  constructor(private http: HttpClient) { }
 
  public login(auth: Auth): Observable<any>{
    return this.http.post<Auth>(this.url+"Authentication/Login",auth);
  }
}
