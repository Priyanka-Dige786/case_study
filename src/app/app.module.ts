import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CheckBooksComponent } from './check-books/check-books.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { AddCopyComponent } from './add-copy/add-copy.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { ListIssueBooksComponent } from './list-issue-books/list-issue-books.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {NgModel, NgForm, FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    ChangePasswordComponent,
    CheckBooksComponent,
    AddBooksComponent,
    AddCopyComponent,
    ReturnBookComponent,
    IssueBookComponent,
    ListIssueBooksComponent,
    AddMemberComponent,
    PaymentComponent,
    PaymentHistoryComponent,
    ListUsersComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "", component: LoginComponent},
      {path: "edit", component: EditComponent, canActivate: [AuthService]},
      {path: "add-books", component: AddBooksComponent},
      {path: "add-copy", component: AddCopyComponent},
      {path: "add-member", component: AddMemberComponent},
      {path: "change-password", component: ChangePasswordComponent},
      {path: "check-books", component: CheckBooksComponent},
      {path: "issue-book", component: IssueBookComponent},
      {path: "list-issue-books", component: ListIssueBooksComponent},
      {path: "list-users", component: ListUsersComponent},
      {path: "payment", component: PaymentComponent},
      {path: "payment-history", component: PaymentHistoryComponent},
      {path: "return-book", component: ReturnBookComponent},
      {path: "home", component: HomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
