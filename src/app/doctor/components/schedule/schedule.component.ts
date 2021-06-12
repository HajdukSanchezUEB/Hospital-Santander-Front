import { Component, Input, OnInit } from '@angular/core';
import { AgendaService, DayService, EventRenderedArgs, EventSettingsModel, MonthAgendaService, MonthService, TimelineMonthService, TimelineViewsService, View, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';
import { AgendasService } from 'src/app/core/services/agendas/agendas.service';
import { Agenda } from 'src/app/interfaces/agenda';
import { Schedule } from 'src/app/interfaces/schedule';

@Component({
  selector: 'app-schedule',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {

  // Calendar initial data and config
  isReadOnly: boolean = false; // Lock or unlock the calendar
  public currentView: View = 'Month'; // Default view of the calendar
  @Input() agenda: any = []; // Object with the calendar data
  public eventSettings: EventSettingsModel = {
    dataSource: this.agenda
  }

  // Array of month agendas
  private agendas: Agenda[] = [];

  constructor() { }

  ngOnInit(): void {
    this.eventSettings.dataSource = this.agenda; // Set the data into the calendar
  }

  // Event when the user add a schedule
  onEventRendered(args: EventRenderedArgs): void {
    // console.log(args);
    const { StartTime, data } = args.data;
    const schedulesAgenda = [] // Array with schedule for the agenda

    // Schedule for the agenda
    const scheduleAgenda: Schedule = {
      id: data.id,
      horarioInicio: this.formatDate(2, data.StartTime),
      horarioFin: this.formatDate(2, data.EndTime)
    }

    // const

    // const agendaNew: Agenda = {
    //   // Id agenda
    //   id: this.agendas.length + 1,
    //   // Date of the agenda
    //   fecha: this.formatDate(1, StartTime),
    //   horario:
    // }
  }

  // Method to format date into a specific form
  private formatDate(type: number, date: Date): string {
    switch (type) {
      case 1: // YYYY-MM-DD | 2021-12-31
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
      case 2: // 2022-02-01T00:00:00 | 2021-12-31T12:10:09
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      default:
        return '';
    }
  }

}
