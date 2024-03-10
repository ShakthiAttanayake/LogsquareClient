import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user-details',
    loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule)
  },
  {
    path: '',
    loadChildren: () => import('../app/core/auth/login/login.module').then(m => m.LoginModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
