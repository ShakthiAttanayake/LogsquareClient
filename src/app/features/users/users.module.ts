import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersGridComponent } from './users-grid/users-grid.component';
import { UsersEditDialogComponent } from './users-edit-dialog/users-edit-dialog.component';



@NgModule({
  declarations: [
    UsersGridComponent,
    UsersEditDialogComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UsersGridComponent,
    UsersEditDialogComponent
  ]
})
export class UsersModule { }
