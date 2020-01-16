import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  book = {"name": "", "author": "", "subject": "", "price": "", "isbn": ""}
  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: DataService) { }

  ngOnInit() {
  }
  onAddBook()
  {
    let observableResult = this.service.InsertBook(this.book);
    observableResult.subscribe((result)=>{
      console.log(this.book);
      result = this.book;
      this.router.navigate(['/add-books']);
    })
  }
}
