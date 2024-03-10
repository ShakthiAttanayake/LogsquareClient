import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersGridComponent } from './users-grid/users-grid.component';
import { UsersEditDialogComponent } from './users-edit-dialog/users-edit-dialog.component';
 
 
const routes: Routes = [
  {
    path: '',
    component: UsersEditDialogComponent
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }