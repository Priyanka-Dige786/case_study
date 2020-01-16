import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent implements OnInit {

  constructor(private service : DataService,
    private router : Router) { }

    listBooks : any;
  ngOnInit()
  {
    let observableResult = this.service.ShowAllBooks();
    observableResult.subscribe((result)=>{
      console.log(result);
      this.listBooks = result;
  })
  }
}
