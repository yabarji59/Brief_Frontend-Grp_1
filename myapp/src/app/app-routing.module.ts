import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  // 1ère route - 
  // component " users-list" 
  { path: 'users-list', component: UsersListComponent },
  // 2ème route - 
  // component " user-details "
  { path: 'user-details/:username', component: UserDetailsComponent },
  // localhost: 4200
  { path: '', redirectTo: '/users-list', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }