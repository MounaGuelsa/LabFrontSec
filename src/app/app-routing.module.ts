import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from "./users/users.component";
import { DashboardCounterComponent } from "./dashboard-counter/dashboard-counter.component";
import { ReagentsComponent } from "./reagents/reagents.component";
import { ListePatientsComponent } from "./liste-patients/liste-patients.component";
import { SamplesComponent } from './samples/samples.component';
import { AnalyseMesuresComponent } from "./analyse-mesures/analyse-mesures.component";
import { AnalyseComponent } from "./analyse/analyse.component";
import { LoginComponent } from './login/login.component';
import { GuardGuard } from './guards/guard.guard';
const routes: Routes = [

  { path: 'users', component: UsersComponent, canActivate: [GuardGuard] },
  { path: 'dashboard', component: DashboardCounterComponent, canActivate: [GuardGuard] },
  { path: "reagents", component: ReagentsComponent, canActivate: [GuardGuard] },
  { path: '', component: DashboardCounterComponent, canActivate: [GuardGuard] },
  { path: 'patients', component: ListePatientsComponent, canActivate: [GuardGuard] },
  { path: 'samples', component: SamplesComponent, canActivate: [GuardGuard] },
  { path: 'analyseMesures', component: AnalyseMesuresComponent, canActivate: [GuardGuard] },
  { path: 'analyse', component: AnalyseComponent, canActivate: [GuardGuard] },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
