import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/core/services/doctor/doctor.service';
import { User } from 'src/app/interfaces/user';
import { Specialty } from 'src/app/interfaces/specialty';
import { Consulting } from 'src/app/interfaces/consulting';
import { WorkData } from 'src/app/interfaces/work-data';

export interface Vegetable {
  name: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // Doctor ID
  private id: number = 0
  // Doctor Data
  public doctor: User = {
    id: 0,
    alias: '',
    nombres: '',
    apellidos: '',
    password: ''
  }
  // Doctor specialties
  public specialties: Specialty[] = []
  // Doctor consulting room
  public consultingRoom: Consulting = {
    id: 0,
    nombre: 'string'
  }

  constructor(
    private _doctorService: DoctorService
  ) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  // We get the user information
  private getUserInfo() {
    this._doctorService.getUserByUserName()
      .subscribe((data: User) => {
        this.doctor = data;
        this.id = data.id;
        this.getWorkData(this.id.toString());
      });
  }

  // We get the specialties for the doctor
  private getWorkData(id: string) {
    this._doctorService.getSpecialtiesById(id)
      .subscribe((data: WorkData) => {
        this.specialties = data.especialidades; // We set the specialties of the doctor
        this.consultingRoom = data.consultorioAsignado; // We set the consulting room data
      })
  }

}
