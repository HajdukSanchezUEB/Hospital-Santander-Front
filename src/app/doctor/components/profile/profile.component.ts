import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DoctorService } from 'src/app/core/services/doctor/doctor.service';
import { User } from 'src/app/interfaces/user';

export interface Vegetable {
  name: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private USERNAME: string = 'znuscha0';

  public doctor: User = {
    id: 0,
    alias: '',
    nombres: '',
    apellidos: '',
    password: ''
  }

  vegetables: Vegetable[] = [
    { name: 'apple' },
    { name: 'banana' },
    { name: 'strawberry' },
    { name: 'orange' },
    { name: 'kiwi' },
    { name: 'cherry' },
  ];

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  }

  constructor(
    private _doctorService: DoctorService
  ) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  private getUserInfo() {
    this._doctorService.getUserByUserName(this.USERNAME)
      .subscribe((data: User) => {
        this.doctor = data;
      })
  }

}
