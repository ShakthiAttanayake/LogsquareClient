import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../services/user.service';
import { Users } from '../../models/users.model';
import { UsersEditDialogComponent } from '../users-edit-dialog/users-edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrl: './users-grid.component.scss'
})
export class UsersGridComponent implements OnInit{
  displayedColumns: string[] = ['id', 'userName', 'email','action'];
  dataSource = new MatTableDataSource<Users>([]);
  public userDetails: Users[] = [];

  constructor(private userService: UserService,private dialog: MatDialog) {
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

  onEdit(user :any) {
    this.openDialog('1000ms','600ms',user)
   }
 
  openDialog(enteranimation: any, exitanimation: any,user:any) {
 
    const dialogRef = this.dialog.open(UsersEditDialogComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: "50%",
      data:user
    })
    dialogRef.afterClosed().subscribe(x=>{
      this.getUserDetails();
    });
  }
}

