import { Component, OnInit } from '@angular/core';
import { TableService } from '../services/table.service';
import { Book } from '../models/Book';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { UpdateComponent } from './update/update.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  books:Book[]=[];
  constructor(private bookservice:TableService,private dialog:MatDialog){}

  ngOnInit(): void {
    this.books=this.bookservice.getAllBooks();
  }
  
  updateBook(book:Book){
    const dialogRef=this.dialog.open(UpdateComponent,{data:book});
    this.books=[...this.books];
  }

}
