import { Component, Input, OnInit } from '@angular/core';
import { AgendaService, DayService, EventRenderedArgs, EventSettingsModel, MonthAgendaService, MonthService, TimelineMonthService, TimelineViewsService, View, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';
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
  @Input() isReadOnly: boolean; // Lock or unlock the calendar
  public currentView: View = 'Month'; // Default view of the calendar
  @Input() agenda: any = []; // Object with the calendar data
  public eventSettings: EventSettingsModel = {
    dataSource: this.agenda
  }

  // Array of month agendas
  private agendas: Agenda[] | any = [];
  private schedulesAgenda: Schedule[] | any = []; // Array with schedule for the agenda

  constructor() { }

  ngOnInit(): void {
    this.eventSettings.dataSource = this.agenda; // Set the data into the calendar
  }

  // Event when the user add a schedule
  onEventRendered(args: EventRenderedArgs): void {
    console.log(args);
    const { StartTime, data, Id } = args.data;

    // Schedule for the agenda
    const scheduleAgenda: Schedule = {
      id: Id,
      horarioInicio: data.StartTime,
      horarioFin: data.EndTime
    }

    const hasSchedule = this.schedulesAgenda.find(schedule => schedule.id === schedule.id) // If the schedule is already into the array of schedule
    this.schedulesAgenda.push(!hasSchedule ? scheduleAgenda : []);

    const agendaNew: Agenda = {
      // Id agenda
      id: this.agendas.length + 1,
      // Date of the agenda
      fecha: StartTime,
      // Array of schedule
      horario: this.schedulesAgenda
    }

    const hasAgenda = this.agendas.find(agenda => agenda.id === agendaNew.id) // If the schedule is already into the array of schedule
    this.agendas.push(!hasAgenda ? agendaNew : []); // We add the new agenda into the schedule
    console.log(this.agendas);
  }
}
