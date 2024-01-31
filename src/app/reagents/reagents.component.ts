import { Component, OnInit } from '@angular/core';
import { ReagentService } from './reagent.service';

@Component({
  selector: 'app-reagents',
  templateUrl: './reagents.component.html',
  styleUrls: ['./reagents.component.css']
})
export class ReagentsComponent implements OnInit {

  reactifs: any[] = [];

  constructor(private reagentService: ReagentService) {}

  ngOnInit(): void {
    this.reagentService.getReagents().subscribe(data => {
      this.reactifs = data;
    });
  }

}
