import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, map} from "rxjs";
import { Auth } from '../models/auth.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  readonly url ="https://localhost:7004/api/";
  private showHeaderIcons: boolean = false;

  booleanObservable$: Observable<boolean> = new Observable<boolean>((observer) => {
    observer.next(this.showHeaderIcons);
  }).pipe(
    map((value) => this.showHeaderIcons)
  );

  setBooleanValue(newValue: boolean): void {
    this.showHeaderIcons = newValue;
  }

  getBooleanValue(): boolean {
    return this.showHeaderIcons;
  }

  constructor(private http: HttpClient) { }
 
  public login(auth: Auth): Observable<any>{
    return this.http.post<Auth>(this.url+"Authentication/Login",auth);
  }

  public isUserLoggedIn() {
    let token = localStorage.getItem('Token');
    if(token == null){
      return false;
    }
    else
    {
      return true;
    }

}
}
