// samples.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Sample } from './sample';
import { SampleService } from './sample.service';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent implements OnInit {
  samples: Sample[] = [];
  showForm: boolean = false;
  showUpdateForm: boolean = false;
  sampleForm: FormGroup = this.formBuilder.group({
    patientId: [null],
    datePrelevement: [null],
  });
  updateSampleForm: FormGroup = this.formBuilder.group({
    patientId: [null],
    datePrelevement: [null],
  });
  selectedSample: Sample | undefined;

  constructor(private sampleService: SampleService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getSamples();
  }

  public getSamples() {
    this.sampleService.getSamples().subscribe(
      (response: Sample[]) => {
        this.samples = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public toggleForm(sample?: Sample): void {
    this.showForm = !this.showForm;

    if (sample) {
      this.showUpdateForm = true;
      this.selectedSample = sample;
      this.updateSampleForm.patchValue({
        patientId: sample.patientId,
        datePrelevement: sample.datePrelevement,
      });
    } else {
      this.showUpdateForm = false;
      this.selectedSample = undefined;
      this.updateSampleForm.reset();
    }
  }

  public addSample(): void {
    this.sampleService.addSample(this.sampleForm?.value).subscribe(
      (response: Sample) => {
        console.log(response);
        this.getSamples();
        this.toggleForm();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public updateSample(): void {
    if (this.selectedSample) {
      const updatedSample: Sample = {
        ...this.selectedSample,
        ...this.updateSampleForm?.value,
      };

      this.sampleService.updateSample(updatedSample).subscribe(
        (response: Sample) => {
          console.log(response);
          this.getSamples();
          this.toggleForm(); // Fermer le formulaire après la mise à jour
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  }

  public deleteSample(sampleId: number): void {
    this.sampleService.deleteSample(sampleId).subscribe(
      (response: string) => {
        console.log(response);
        this.getSamples();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // Ajoutez d'autres méthodes selon vos besoins

}
