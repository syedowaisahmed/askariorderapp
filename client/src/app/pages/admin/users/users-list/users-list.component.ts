import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from "@angular/material/table";
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html'
})
export default class UsersListComponent implements OnInit {

  usersSource: MatTableDataSource<Array<any>> = new MatTableDataSource();
  totalItems: number = 0;
  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 25];
  pageIndex: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:5000/api/users').subscribe((users) => {
      this.usersSource = new MatTableDataSource(users);
      this.totalItems = users?.length;
    });
  }

  usersTableColumns: string[] = ['_id', 'firstName', 'lastName', 'username', 'email', 'createdAt', 'updatedAt', 'actions'];

  editRow(row: any): void {

  }

  deleteRow(row: any): void {

  }

  viewUserDetail(row: any): void {

  }

  pageChanged(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }
}
