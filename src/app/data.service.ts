import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  constructor(private http: HttpClient ) 
  { 
    console.log("Data service object created");
  }

  InsertMember(user)
  {
    return this.http.post("http://localhost:8080/Case_Study/librarian/member", user);
  }

  InsertBook(book)
  {
    return this.http.post("http://localhost:8080/Case_Study/librarian/book", book);
  }

  InsertBookCopy(bookcopy)
  {
    return this.http.post("http://localhost:8080/Case_Study/librarian/"+ bookcopy.Id, bookcopy);
  }

  EditProfile(user)
  {
    return this.http.put("http://localhost:8080/Case_Study/librarian/update", user);
  }

  ShowAllUser()
  {
    return this.http.get("http://localhost:8080/Case_Study/librarian/list");
  }

  ShowAllBooks()
  {
    return this.http.get("http://localhost:8080/Case_Study/librarian/book");
  }

  Check(userdetalis)
  {
    return this.http.post("http://localhost:8080/Case_Study/user/login", userdetalis);
  }
}
