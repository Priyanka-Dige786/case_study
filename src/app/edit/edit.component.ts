import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user = {"name": "", "email": "", "phone": "", "password": "", "role": ""};
  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: DataService) { }

  ngOnInit() {
  }
  onUpdate()
  {
    let observableResult = this.service.EditProfile(this.user);
    observableResult.subscribe((result)=>{
      console.log(this.user);
      result = this.user;
      this.router.navigate(['/edit']);
    })
  }
}
