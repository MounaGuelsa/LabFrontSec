import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListePatientsComponent } from './liste-patients/liste-patients.component';
import { ReagentsComponent } from './reagents/reagents.component';

const routes: Routes = [
  {path:"liste-patients",component:ListePatientsComponent},
  {path:"reagents",component:ReagentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
