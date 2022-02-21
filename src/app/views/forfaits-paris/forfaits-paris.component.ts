import { Component, OnInit } from '@angular/core';
import { Forfait } from 'src/app/forfait';
import { ForfaitService } from 'src/app/forfait.service';

@Component({
  selector: 'app-forfaits-paris',
  templateUrl: './forfaits-paris.component.html',
  styleUrls: ['./forfaits-paris.component.css']
})
export class ForfaitsParisComponent implements OnInit {

  forfaits: Forfait[] = [];

  constructor(private forfaitService: ForfaitService){}

  ngOnInit():void {
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitService.getForfaits().subscribe(res => this.forfaits = res)
  }

}
