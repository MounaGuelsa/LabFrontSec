import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListePatientsComponent } from './liste-patients/liste-patients.component';

const routes: Routes = [
  {path:"liste-patients",component:ListePatientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
