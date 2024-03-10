import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersGridComponent } from './users-grid/users-grid.component';
import { UsersEditDialogComponent } from './users-edit-dialog/users-edit-dialog.component';
import { MatTableModule} from '@angular/material/table';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    UsersGridComponent,
    UsersEditDialogComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    UsersRoutingModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule//,
    //HttpClientModule
  ]
})
export class UsersModule { }
