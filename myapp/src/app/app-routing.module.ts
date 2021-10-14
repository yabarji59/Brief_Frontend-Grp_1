import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/usersListComponent';
import { UserDetailsComponent } from './user-details/userDetailsComponent';

const routes: Routes = [
//   ancien projet { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: 'dashbord', component: DashboardComponent },
//   { path: 'detail/:username', component: UtilisateurDetailComponent },
//   { path: 'utilisateurs', component: UtilisateursComponent }

  // 1ère route - 
  // component " users-list" 

  { path: 'usersList', component: UsersListComponent },
    // 2ème route - 
  // component " user-details "
  { path: 'userDetails', component: UserDetailsComponent },
  /** localhost: 4200  */
  { path: '', component.UsersListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }