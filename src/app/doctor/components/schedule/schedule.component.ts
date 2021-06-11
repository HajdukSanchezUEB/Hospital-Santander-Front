import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AgendaService, DayService, EventRenderedArgs, MonthAgendaService, MonthService, TimelineMonthService, TimelineViewsService, View, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';
import { Agenda } from 'src/app/interfaces/agenda';

@Component({
  selector: 'app-schedule',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {

  public currentView: View = 'Month';
  // Array of month agendas
  private agendas: Agenda[] = [];

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onEventRendered(args: EventRenderedArgs): void {
    // TODO: Agregar ID doctor al arreglo de agenda

    const { Id, Subject, StartTime, EndTime } = args.data;
    const actualDate = new Date().getDate();
    const dateSelected = StartTime.getDate();
    if (dateSelected > actualDate) {
      // Object that is going to be add
      const newSchedule = {
        Id,
        Subject,
        StartTime,
        EndTime
      }
      const hashAgenda = this.agendas.filter((schedule) => schedule.Id === Id); // Search the agenda into the actual list
      hashAgenda.length > 0 ? this.agendas = [...this.agendas] : this.agendas = [...this.agendas, newSchedule]; // If the agenda already exist into the list, does not add it
    } else {
      // this.showMessage('The schedule cannot be one day before the current one, or current one');
      console.log(Id);
    }
    console.log(this.agendas);

  }

  // Message for schedule
  private showMessage(text: string) {
    this._snackBar.open(text, '', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000, // Duration in milliseconds
      panelClass: ["snack", "snack--error"] // Styles
    });
  }

}
