import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { NotificationService } from '../services/notification.service';

const ELEMENT_DATA: any[] = [
  {title:'Python For Beginners',isbn: 'HJHH07-DDSDD', language:'English', description:'Python all combined',genre:'World History'},
  {title:'C++ For Beginners',isbn: 'IH7-9887-HHH', language:'English', description:'C++ all combined',genre:'World History'},
  {title:'Java For Beginners',isbn: '9987-UHGTG-YY6546', language:'English', description:'Java all combined',genre:'World History'},
  {title:'Machine Learning',isbn: '009-77YHG-HHJT6', language:'English', description:'Machine all combined',genre:'World History'},
  {title:'Artificial Intelligence',isbn: 'HNDGHD-89887-YJJUJ', language:'English', description:'Python all combined',genre:'World History'},
  {title:'Money and Muscle',isbn: 'Hydrogen', language:'English', description:'Python all combined',genre:'World History'},
  {title:'Ramayanam',isbn: 'HNDGHD-89887-YJJUJ', language:'English', description:'Python all combined',genre:'World History'},
  {title:'Python For Beginners',isbn: 'HNDGHD-89887-YJJUJ', language:'Kannada', description:'Python all combined',genre:'World History'},
  {title:'Python For Beginners',isbn: 'HNDGHD-89887-YJJUJ', language:'Hindi', description:'Python all combined',genre:'World History'},
  {title:'Python For Beginners',isbn: 'HNDGHD-89887-YJJUJ', language:'Telugu', description:'Python all combined',genre:'World History'},
  {title:'Python For Beginners',isbn: 'HNDGHD-89887-YJJUJ', language:'English', description:'Python all combined',genre:'World History'},
  {title:'Python For Beginners',isbn: 'HNDGHD-89887-YJJUJ', language:'English', description:'Python all combined',genre:'World History'},
  {title:'Python For Beginners',isbn: 'HNDGHD-89887-YJJUJ', language:'English', description:'Python all combined',genre:'World History'},
  {title:'Python For Beginners',isbn: 'HNDGHD-89887-YJJUJ', language:'English', description:'Python all combined',genre:'World History'},
 
];


@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css']
})
export class BookStoreComponent implements OnInit {

  displayedColumns: string[] = ['position', 'title', 'isbn', 'language','description','Edit','Disable'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  AddBook() {
    const dialogRef = this.dialog.open(AddBookDialog,{
      width: '1250px'}
      );

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
    });
  }

  EditBook(editel:any) {
    const dialogRef = this.dialog.open(EditBookDialog,{
      width: '1050px',
      data: editel 
    }
      );

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
    });
  }

}

@Component({
  selector: 'add-newbook',
  templateUrl: 'add-newbook.html',
  styleUrls: ['./book-store.component.css']
})
export class AddBookDialog {
  constructor(
    public dialogRef: MatDialogRef<AddBookDialog>,
    // @Inject(MAT_DIALOG_DATA) public data: any,
    private fb:FormBuilder,private http:HttpClient,private notification:NotificationService
  ) {}

  languages=['English','Hindi','Kannada','Tamil','Telugu','Malaylam','Others']
  genres=['Music','Military Science','Bibliography','World History','Fine Arts','Philosophy','Technology','Auxilary Sciences','Language & Literature']
  
  addbookform=this.fb.group({
    'isbn':[null,Validators.required],
    'language':[null,Validators.required],
    'genre':[null,Validators.required],
    'description':[null,Validators.required],
    'title':[null,Validators.required],
    'authors':[null,Validators.required],
    'publisher':[null,Validators.required],
    'pubdate':[null],
    'price':[null],
    'edition':[null],
   
  })
  addBook()
  {
    if(this.addbookform.valid)
    { 
      console.log(this.addbookform.value);
      this.notification.success('its working')
    }
    else
    {
      this.notification.warn('Please enter all required fields')
    }
  
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'edit-newbook',
  templateUrl: 'editbook.html',
  styleUrls: ['./book-store.component.css']
})
export class EditBookDialog implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<EditBookDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb:FormBuilder,private http:HttpClient,private notification:NotificationService
  ) {}
  
  languages=['English','Hindi','Kannada','Tamil','Telugu','Malaylam','Others']
  genres=['Music','Military Science','Bibliography','World History','Fine Arts','Philosophy','Technology','Auxilary Sciences','Language & Literature']
  
 editdetailsform=this.fb.group({
   'title':[null],
   'isbn':[null],
   'language':[null],
   'description':[null],
   'genre':[null]
 })
  
  ngOnInit()
  {
    this.editdetailsform.patchValue({
      title: this.data.title,
      isbn: this.data.isbn,
      language: this.data.language,
      description: this.data.description,
      genre: this.data.genre,
      
    });
  }
  editDetails()
  {
    console.log(this.editdetailsform.value);
    this.notification.success('Edited Succesfully')
    this.onNoClick()
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}