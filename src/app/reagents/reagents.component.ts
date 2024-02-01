// reagents.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from "@angular/common/http";
import { Reagent } from "./reagent";  // Make sure to import the Reagent interface
import { ReagentService } from "./reagent.service";  // Adjust the import based on your service file

@Component({
  selector: 'app-reagents',
  templateUrl: './reagents.component.html',
  styleUrls: ['./reagents.component.css']
})
export class ReagentsComponent implements OnInit {
  reagents: Reagent[] = [];
  showForm: boolean = false;
  showUpdateForm: boolean = false;
  reagentForm: FormGroup = this.formBuilder.group({
    nom: ['', Validators.required],
    description: [''],
    quantite: [0, Validators.required],
    dateDeExpiration: [null],
    fournisseur: [''],
    analyseId: [null],
  });
  updateReagentForm: FormGroup = this.formBuilder.group({
    nom: ['', Validators.required],
    description: [''],
    quantite: [0, Validators.required],
    dateDeExpiration: [null],
    fournisseur: [''],
    analyseId: [null],
  });
  selectedReagent: Reagent | undefined;

  constructor(private reagentService: ReagentService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getReagents();
  }

  public getReagents() {
    this.reagentService.getReagents().subscribe(
      (response: Reagent[]) => {
        this.reagents = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public toggleForm(reagent?: Reagent): void {
    this.showForm = !this.showForm;

    if (reagent) {
      this.showUpdateForm = true;
      this.selectedReagent = reagent;
      this.updateReagentForm.patchValue({
        nom: reagent.nom,
        description: reagent.description,
        quantite: reagent.quantite,
        dateDeExpiration: reagent.dateDeExpiration,
        fournisseur: reagent.fournisseur,
        analyseId: reagent.analyseId,
      });
    } else {
      this.showUpdateForm = false;
      this.selectedReagent = undefined;
      this.updateReagentForm.reset();
    }
  }

  public addReagent(): void {
    this.reagentService.addReagent(this.reagentForm?.value).subscribe(
      (response: Reagent) => {
        console.log(response);
        this.getReagents();
        this.toggleForm();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public updateReagent(): void {
    if (this.selectedReagent) {
      const updatedReagent: Reagent = {
        ...this.selectedReagent,
        ...this.updateReagentForm?.value,
      };

      this.reagentService.updateReagent(updatedReagent).subscribe(
        (response: Reagent) => {
          console.log(response);
          this.getReagents();
          this.toggleForm(); // Close the form after updating
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  }

  public deleteReagent(reagentId: number): void {
    this.reagentService.deleteReagent(reagentId).subscribe(
      (response: string) => {
        console.log(response);
        this.getReagents();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
