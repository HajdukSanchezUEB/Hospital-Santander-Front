import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private USERNAME: string = 'znuscha0';

  constructor(
    private http: HttpClient,
  ) { }

  // Get the data of a user by the username
  public getUserByUserName(userName?: string) {
    return this.http.get(`http://localhost:8080/apiuser/user/${this.USERNAME}`);
  }

  // Get the specialities of an specific doctor
  public getSpecialtiesById(id: string) {
    return this.http.get(`http://localhost:8080/apimedico/medico/${id}`);
  }
}
