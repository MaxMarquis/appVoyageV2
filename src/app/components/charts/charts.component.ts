import { Component, Input, OnInit } from '@angular/core';
import { ChartType, ChartData } from 'chart.js';
import { Forfait } from 'src/app/forfait';
import { ForfaitService } from 'src/app/forfait.service';
import { Reservation } from 'src/app/reservation';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  reservations: Reservation[] = []
  paris = 0

  public monGraphique = {
    type: <ChartType>'pie',
    legende: true,
    plugins: [],
    options: { responsive: true, maintainAspectRatio: false }
  };

  public mesDonnees: ChartData<'bar', number[], string | string[]> = {
    labels: ['Adultes', 'Enfants'],
    datasets: [
      { data: [65, 59] }
    ]
  };

  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations(): void {
    this.forfaitService.getReservations().subscribe((res) => (this.reservations = res));
  }
}
