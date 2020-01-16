import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  user = {"name": "", "email": "", "phone": "", "password": "", "role": ""}
  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: DataService)
     { }

  ngOnInit() {
  }

  OnAddMember()
  {
    let observableResult = this.service.InsertMember(this.user);
    observableResult.subscribe((result)=>{
      console.log(this.user);
      result = this.user;
      this.router.navigate(['/add-member']);
    })
  }
}
