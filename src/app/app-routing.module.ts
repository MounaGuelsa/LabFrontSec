import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {DashboardCounterComponent} from "./dashboard-counter/dashboard-counter.component";

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'dashboard', component: DashboardCounterComponent },
  { path: '', component: DashboardCounterComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
