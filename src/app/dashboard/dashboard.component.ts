import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  counting=['a','b','c','d','e','r','gh','b','c','d','e','r','gh']
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  getBookDetails() {

    const dialogRef = this.dialog.open(BookDetailsDialog,{
      width: '450px',
      data: {name: 'Shibu Inu'},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'book-detail-dialog',
  templateUrl: 'bookdetail-dialog.html',
  styleUrls: ['./dashboard.component.css']
})
export class BookDetailsDialog {

  constructor(
    public dialogRef: MatDialogRef<BookDetailsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

}