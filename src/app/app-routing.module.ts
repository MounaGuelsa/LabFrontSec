import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {DashboardCounterComponent} from "./dashboard-counter/dashboard-counter.component";
import {ReagentsComponent} from "./reagents/reagents.component";
import {ListePatientsComponent} from "./liste-patients/liste-patients.component";
import { SamplesComponent } from './samples/samples.component';

const routes: Routes = [

  { path: 'users', component: UsersComponent },
  { path: 'dashboard', component: DashboardCounterComponent },
  {path:"reagents",component:ReagentsComponent},
  { path: '', component: DashboardCounterComponent },
  {path:'patients',component:ListePatientsComponent},
  { path: 'samples', component: SamplesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
