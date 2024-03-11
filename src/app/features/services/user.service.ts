import { Injectable } from '@angular/core';
import { Users } from '../models/users.model';
import { Observable} from "rxjs";
import { HttpClient, HttpParams, HttpResponse } from "@angular/common/http";
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly url ="https://localhost:7004/api/";
  constructor(private http: HttpClient) { }

  public getUser(): Observable<Users[]>{
    return this.http.get<any>(this.url+"User/GetAllUsers");
  }

  public getUserById(userId: number): Observable<any>{
    let queryParams = new HttpParams();
    queryParams.append('Id',userId.toString());
    return this.http.get<any>(this.url+"User/GetUserById/" + userId);
  }
 
  public createUser(user: Users): Observable<any>{
    return this.http.post<Users>(this.url+"User/CreateUser",user);
  }
 
  public updateUser(user: Users): Observable<any>{
    return this.http.patch<any>(this.url+"User/UpdateUser",user);
  }
 
  public deleteUser(userId: number){
    let queryParams = new HttpParams();
    queryParams.append('Id',userId.toString());
    return this.http.delete<any>(this.url+"User/DeleteUser/" + userId)
  }

  downloadExcelFile() {
    const apiUrl = this.url+"User/ExportUsersToExcel";

    this.http.get(apiUrl, { responseType: 'blob' })
      .subscribe((data: Blob) => {
        // Handle the file download
        saveAs(data, 'users.xlsx');
      }, error => {
        console.error('Error downloading file:', error);
      });
  }

}
