import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  // Icons
  dangerIcon = faExclamationCircle;

  public loading: boolean = false;

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
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
