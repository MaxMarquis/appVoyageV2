import { Component, OnInit } from '@angular/core';
import { ForfaitService } from 'src/app/forfait.service';
import { Forfait } from 'src/app/forfait';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  forfaits: Forfait[] = [];

  constructor(private forfaitService: ForfaitService) {}

  ngOnInit(): void {
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitService.getForfaits().subscribe((res) => (this.forfaits = res));
  }
}
