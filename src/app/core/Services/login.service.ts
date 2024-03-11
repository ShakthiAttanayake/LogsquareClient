import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, Observer, map} from "rxjs";
import { Auth } from '../models/auth.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  readonly url ="https://localhost:7004/api/";
  private showHeaderIcons: boolean = false;

  private _showHeaderIconsObservable$: Observable<boolean>;
  private _showHeaderIcons!: Observer<boolean>;

  constructor(private http: HttpClient) { 
    this._showHeaderIconsObservable$ = new Observable<boolean>((observer: Observer<boolean>) => {
      this._showHeaderIcons = observer;
    });
  }
 
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

  setObservableValue(value: boolean): void {
    if (this._showHeaderIcons) {
      this._showHeaderIcons.next(value);
    }
  }
 
  getObservable(): Observable<boolean> {
    return this._showHeaderIconsObservable$;
  }
}
