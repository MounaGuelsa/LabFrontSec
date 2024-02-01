import { Component, OnInit } from '@angular/core';
import { AnalyseMesuresService } from './analyse-mesures.service';
import { AnalyseMesures } from './analyse-mesures';

@Component({
  selector: 'app-analyse-mesures',
  templateUrl: './analyse-mesures.component.html',
  styleUrls: ['./analyse-mesures.component.css']
})
export class AnalyseMesuresComponent implements OnInit {
  allMesures: AnalyseMesures[] = [];
  mesureById: AnalyseMesures | null = null;
  idToFetch: number | null = null;
  showAllMesures: boolean = true;
  showFetchByIdForm: boolean = false;

  constructor(private analyseMesuresService: AnalyseMesuresService) { }

  ngOnInit(): void {
    this.fetchAllMesures();
  }

  fetchAllMesures(): void {
    this.analyseMesuresService.getAllMesures().subscribe(mesures => {
      this.allMesures = mesures;
      this.showAllMesures = true;
      this.showFetchByIdForm = false;
    });
  }
  fetchMesureById(): void {
    if (this.idToFetch !== null) {
      this.analyseMesuresService.getMesureById(this.idToFetch).subscribe(
        mesure => {
          this.mesureById = mesure;
          this.showAllMesures = false;
          this.showFetchByIdForm = false;
        },
        error => {
          console.error('Error fetching measure by ID:', error);
        }
      );
    }
  }

  showFetchById(): void {
    this.showAllMesures = false;
    this.showFetchByIdForm = true;
  }
}
