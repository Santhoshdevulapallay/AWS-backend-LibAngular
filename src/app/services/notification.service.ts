import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import {MatSnackBarConfig} from '@angular/material/snack-bar/snack-bar-config';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }

  config: MatSnackBarConfig = {
    duration: 4000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  }


  success(msg:string) {
    this.config['panelClass'] = ['notification', 'success'];
    this.snackBar.open(msg, '',this.config);
  }

  warn(msg:string) {
    this.config['panelClass'] = ['notification', 'warn'];
    this.snackBar.open(msg, '', this.config);
    
  }
}
