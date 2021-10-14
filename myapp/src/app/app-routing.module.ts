import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: 'users-list', component: UserListComponent },
  // { path: 'user/:username', component: UserDetailComponent },
  // { path: 'user', redirectTo: '/users-list', pathMatch: 'full' },
  // { path: '', redirectTo: '/users-list', pathMatch: 'full' },

//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: 'dashbord', component: DashboardComponent },
//   { path: 'detail/:username', component: UtilisateurDetailComponent },
//   { path: 'utilisateurs', component: UtilisateursComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }