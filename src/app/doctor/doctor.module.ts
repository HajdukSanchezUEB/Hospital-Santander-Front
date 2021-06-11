import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarComponent } from './components/calendar/calendar.component';
import { NavComponent } from './components/nav/nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

import { DoctorRoutingModule } from './doctor-routing.module';
import { MaterialModule } from '../material/material.module';
import { FawesomeModule } from '../fawesome/fawesome.module';
import { LoaderModule } from '../loader/loader.module';
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';

@NgModule({
  declarations: [
    CalendarComponent,
    NavComponent,
    ProfileComponent,
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    MaterialModule,
    FawesomeModule,
    ScheduleModule,
    RecurrenceEditorModule,
    LoaderModule,
  ],
})
export class DoctorModule { }
