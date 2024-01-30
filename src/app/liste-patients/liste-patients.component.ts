import { Component, OnInit } from '@angular/core';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-liste-patients',
  templateUrl: './liste-patients.component.html',
  styleUrls: ['./liste-patients.component.css']
})
export class ListePatientsComponent implements OnInit {
  patients: any[] = [];
  newPatient: any = {};
  showForm: boolean = false;

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.getPatients().subscribe(data => {
      this.patients = data;
    });
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  closeModal() {
    this.showForm = false;
  }

  addPatient() {
    this.patientService.addPatient(this.newPatient).subscribe(response => {
      this.patients = response;
      this.newPatient = {};
      this.closeModal();
    });
  }
}
