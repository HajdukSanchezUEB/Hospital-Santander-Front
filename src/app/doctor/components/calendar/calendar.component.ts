import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { AgendasService } from 'src/app/core/services/agendas/agendas.service';
import { Agenda } from 'src/app/interfaces/agenda';
import { Schedule } from 'src/app/interfaces/schedule';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  // Icons
  dangerIcon = faExclamationCircle;

  public loading: boolean = false;

  // Array with the DB schedule
  public DBSchedule = [];

  constructor(
    private _snackBar: MatSnackBar,
    private _agendasService: AgendasService
  ) { }

  ngOnInit(): void {
    this.getMonthAgendas();
  }

  private getMonthAgendas() {
    this._agendasService.getAgendaById('1')
      .subscribe((agenda: Agenda) => {
        agenda.horario.map(data => { // We modify the elements
          this.createScheduleObject(data);
        });
      });
  }

  // Create the data object and then we add into the agenda array
  private createScheduleObject(data: Schedule) {
    const schedule = {
      Id: data.id,
      Subject: "Medical work schedule",
      StartTime: new Date(data.horarioInicio),
      EndTime: new Date(data.horarioFin),
      IsAllDay: false,
      IsBlock: false,
      IsReadonly: false,
    }
    this.DBSchedule.push(schedule);
  }

  // Message for schedule
  openSnackBar() {
    this.loading = true; // Show the loader
    setTimeout(() => {
      this._snackBar.open('Added schedule', '', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration: 5000, // Duration in milliseconds
        panelClass: ["snack", "snack--success"] // Styles
      });
      this.loading = false; // Hide the loader
    }, 1000);
  }

}
