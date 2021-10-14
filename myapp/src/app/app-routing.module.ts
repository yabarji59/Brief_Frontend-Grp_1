import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  // 1ère route - 
  // component " users-list" 

  { path: 'usersList', component: UsersListComponent },
    // 2ème route - 
  // component " user-details "
  { path: 'userDetails', component: UserDetailsComponent },
  /** localhost: 4200  */
  { path: '', component: UsersListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }