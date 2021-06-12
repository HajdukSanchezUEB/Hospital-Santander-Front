import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendasService {

  constructor(
    private http: HttpClient,
  ) { }

  // We get an specific agenda item
  public getAgendaById(id: string) {
    return this.http.get(`http://localhost:8080/agenda/${id}`);
  }

}
