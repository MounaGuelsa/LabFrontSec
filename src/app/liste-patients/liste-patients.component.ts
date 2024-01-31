// liste-patients.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Patient } from './patient';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-liste-patients',
  templateUrl: './liste-patients.component.html',
  styleUrls: ['./liste-patients.component.css']
})
export class ListePatientsComponent implements OnInit {
  patients: Patient[] = [];
  showForm: boolean = false;
  showUpdateForm: boolean = false; // Renommez cette propriété pour éviter les erreurs
  patientForm: FormGroup = this.formBuilder.group({
    nom: ['', Validators.required],
    dateDeNaissance: ['', Validators.required],
    sexe: ['', Validators.required],
    adresse: ['', Validators.required],
    telephone: ['', Validators.required]
  });
  updatePatientForm: FormGroup = this.formBuilder.group({
    nom: ['', Validators.required],
    dateDeNaissance: ['', Validators.required],
    sexe: ['', Validators.required],
    adresse: ['', Validators.required],
    telephone: ['', Validators.required]
  });
  selectedPatient: Patient | undefined;

  constructor(private patientService: PatientService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getPatients();
  }

  public getPatients() {
    this.patientService.getPatients().subscribe(
      (response: Patient[]) => {
        this.patients = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public toggleForm(patient?: Patient): void {
    this.showForm = !this.showForm;

    if (patient) {
      this.showUpdateForm = true;
      this.selectedPatient = patient;
      this.updatePatientForm.patchValue({
        nom: patient.nom,
        dateDeNaissance: patient.dateDeNaissance,
        sexe: patient.sexe,
        adresse: patient.adresse,
        telephone: patient.telephone,
      });
    } else {
      this.showUpdateForm = false;
      this.selectedPatient = undefined;
      this.updatePatientForm.reset();
    }
  }

  public addPatient(): void {
    this.patientService.addPatient(this.patientForm?.value).subscribe(
      (response: Patient) => {
        console.log(response);
        this.getPatients();
        this.toggleForm();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public updatePatient(): void {
    if (this.selectedPatient) {
      const updatedPatient: Patient = {
        ...this.selectedPatient,
        ...this.updatePatientForm?.value,
      };

      this.patientService.updatePatient(updatedPatient).subscribe(
        (response: Patient) => {
          console.log(response);
          this.getPatients();
          this.toggleForm(); // Close the form after updating
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  }

  public deletePatient(patientId: number): void {
    this.patientService.deletePatient(patientId).subscribe(
      (response: string) => {
        console.log(response);
        this.getPatients();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // Ajoutez ces méthodes pour résoudre les erreurs
  public togglePatientForm(patient?: Patient): void {
    this.toggleForm(patient);
  }

  get showPatientForm(): boolean {
    return this.showForm;
  }

  get showUpdatePatientForm(): boolean {
    return this.showUpdateForm;
  }
}
