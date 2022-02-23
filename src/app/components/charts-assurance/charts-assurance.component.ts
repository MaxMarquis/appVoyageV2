import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-charts-assurance',
  templateUrl: './charts-assurance.component.html',
  styleUrls: ['./charts-assurance.component.css']
})
export class ChartsAssuranceComponent implements OnInit {
  public monGraphique = {
    type: <ChartType>'bar',
    legende: true,
    plugins: [],
    options: { responsive: true, maintainAspectRatio: false }
  };

  public mesDonnees: ChartData<'bar', number[], string | string[]> = {
    labels: ['Assurance',],
    datasets: [
      { data: [65], label: "Assuré" },
      { data: [80], label: "Non-Assuré" }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
