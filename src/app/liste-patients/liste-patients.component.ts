// liste-patients.component.ts
import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-liste-patients',
  templateUrl: './liste-patients.component.html',
  styleUrls: ['./liste-patients.component.css']
})
export class ListePatientsComponent implements OnInit {
  patients: any[] = [];

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.getPatients().subscribe(data => {
      this.patients = data;
    });
  }
}
