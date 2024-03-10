import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../services/user.service';
import { Users } from '../../models/users.model';

@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrl: './users-grid.component.scss'
})
export class UsersGridComponent implements OnInit{
  displayedColumns: string[] = ['id', 'userName', 'email'];
  dataSource = new MatTableDataSource<Users>([]);
  public userDetails: Users[] = [];
  constructor(private userService: UserService) {
    
  }

  ngOnInit(): void {

    this.getUserDetails();
  }

  private getUserDetails(){
    this.userService.getUser().subscribe(data => {
      let details = data.map((d: Users) => ({
        id: d.id.toString(),
        userName: d.userName,
        email: d.email
      }));
      
      this.dataSource = new MatTableDataSource<any>(details);
    })
  }
}

