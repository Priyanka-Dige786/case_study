import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private service : DataService,
    private router : Router) { }

 
  listUsers : any;

  ngOnInit() 
  {
    let observableResult = this.service.ShowAllUser();
    observableResult.subscribe((result)=>{
      console.log(result);
      this.listUsers = result;
    })
  }
}
