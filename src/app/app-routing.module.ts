import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListePatientsComponent } from './liste-patients/liste-patients.component';
import {UsersComponent} from "./users/users.component";
import {DashboardCounterComponent} from "./dashboard-counter/dashboard-counter.component";
import {ReagentsComponent} from "./reagents/reagents.component";

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'patients', component: ListePatientsComponent },
  { path: 'dashboard', component: DashboardCounterComponent },
  {path:"reagents",component:ReagentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
