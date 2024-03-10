import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersGridComponent } from './users-grid/users-grid.component';
import { UsersEditDialogComponent } from './users-edit-dialog/users-edit-dialog.component';
import { MatTableModule} from '@angular/material/table';
import { UsersRoutingModule } from './users-routing.module';


@NgModule({
  declarations: [
    UsersGridComponent,
    UsersEditDialogComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
