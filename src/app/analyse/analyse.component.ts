import { Component, OnInit } from '@angular/core';
import { Analyse } from './analyse';
import {AnalyseService} from "./analyse-service.service";

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.css']
})
export class AnalyseComponent implements OnInit {
  analyses: Analyse[] = [];
  selectedAnalyse: Analyse | null = null;
  showAllAnalyses: boolean = true;

  constructor(private analyseService: AnalyseService) { }

  ngOnInit(): void {
    this.getAnalyses();
  }

  getAnalyses(): void {
    this.analyseService.getAnalyses().subscribe(analyses => this.analyses = analyses);
  }

  deleteAnalyse(id: number): void {
    this.analyseService.deleteAnalyse(id).subscribe(() => {
      alert('Analyse deleted successfully');
      this.getAnalyses();
    });
  }

  getAnalyseDetails(id: number): void {
    this.analyseService.getAnalyse(id).subscribe(analyse => {
      this.selectedAnalyse = analyse;
      this.showAllAnalyses = false;
    });
  }

  showAll(): void {
    this.showAllAnalyses = true;
    this.selectedAnalyse = null;
  }

}
