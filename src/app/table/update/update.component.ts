import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/Book';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
    private service:TableService, private router: Router){}

  ngOnInit(): void {}

  editBook(){
    if(this.data){
      this.service.updateBook(this.data);
      this.router.navigate(['/home']);
    }
  }
}
