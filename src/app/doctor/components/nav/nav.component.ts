import { Component, OnInit } from '@angular/core';
import { faCalendar, faUser } from '@fortawesome/free-regular-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { DoctorService } from 'src/app/core/services/doctor/doctor.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // Icons
  calendarIcon = faCalendar;
  userIcon = faUser;
  outIcon = faSignOutAlt;

  // Doctor Data
  public name: string = '';
  public lastName: string = '';

  constructor(
    private _doctorService: DoctorService
  ) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  private getUserInfo() {
    this._doctorService.getUserByUserName()
      .subscribe((data: User) => {
        this.name = data.nombres;
        this.lastName = data.apellidos;
      });
  }

}
