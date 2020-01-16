import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIssueBooksComponent } from './list-issue-books.component';

describe('ListIssueBooksComponent', () => {
  let component: ListIssueBooksComponent;
  let fixture: ComponentFixture<ListIssueBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListIssueBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIssueBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
