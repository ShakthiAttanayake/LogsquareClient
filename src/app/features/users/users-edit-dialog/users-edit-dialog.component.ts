import { Component, OnInit, input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { Users } from '../../models/users.model';
import { UserService } from '../../services/user.service';
import { Input} from '@angular/core';

@Component({
  selector: 'app-users-edit-dialog',
  templateUrl: './users-edit-dialog.component.html',
  styleUrl: './users-edit-dialog.component.scss'
})
export class UsersEditDialogComponent implements OnInit{

  @Input() isUpdate: boolean = false; 
  @Input() userId: number = 2; 

  private user: Users = {} as Users;
  public formHeader: string = 'Edit User';
  public formAction: string = 'Add User';
  id = new FormControl(0);
  userName = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');

  constructor(private _formBuilder: FormBuilder, private userService:UserService) {}

  ngOnInit(): void {

    this.getUserDetails();
  }


  options = this._formBuilder.group({
    id: this.id, 
    userName: this.userName, 
    email: this.email, 
    password: this.password, 
  });

  OnSubmit() 
  {
    this.user.id = this.options.controls['id']?.value!;
    this.user.userName = this.options.controls['userName']?.value??'';
    this.user.email = this.options.controls['email']?.value??'';
    this.user.password = this.options.controls['password']?.value??'';

    if(this.isUpdate){
      this.userService.createUser(this.user).subscribe(x => {
        console.log(x)
        alert("User created successfully !");
        this.getUserDetails();
      });
    }else{
      this.userService.updateStudent(this.user).subscribe(x => {
        console.log(x)
        alert("User updated successfully !");
        this.getUserDetails();
      });

    }
    
   
  }

  private getUserDetails(){
    this.userService.getStudentById(this.userId).subscribe(u => {
      this.options.setValue({      
        id : u.id,
        userName : u.userName,  
        email : u.email,
        password : u.password
      });
    });
  }

}
