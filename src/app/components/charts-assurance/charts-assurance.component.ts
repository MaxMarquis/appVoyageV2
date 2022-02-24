import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { ForfaitService } from 'src/app/forfait.service';
import { Reservation } from 'src/app/reservation';

@Component({
  selector: 'app-charts-assurance',
  templateUrl: './charts-assurance.component.html',
  styleUrls: ['./charts-assurance.component.css']
})
export class ChartsAssuranceComponent implements OnInit {
  reservations: Reservation[] = []
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
  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.getReservations();
    console.log(this.reservations)
  }

  // j'ai essayé d'aller chercher mes réservations et faire une boucle pour incrémenter la variable assure / nonassure
  // mais mes reservations ne sortent pas

  getReservations(): void {
    this.forfaitService.getReservations().subscribe((res) => this.reservations = res)
  }
}