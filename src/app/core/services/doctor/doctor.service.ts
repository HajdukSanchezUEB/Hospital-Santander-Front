import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(
    private http: HttpClient,
  ) { }

  public getUserByUserName(userName: string) {
    return this.http.get(`http://localhost:8080/apiuser/user/${userName}`);
  }
}
