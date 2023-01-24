import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  constructor(public snackBarRef: MatSnackBarRef<AlertComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}
