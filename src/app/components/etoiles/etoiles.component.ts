import { Component, Input, OnInit } from '@angular/core';
import { Forfait } from 'src/app/forfait';

@Component({
  selector: 'app-etoiles',
  templateUrl: './etoiles.component.html',
  styleUrls: ['./etoiles.component.css']
})
export class EtoilesComponent implements OnInit {
  @Input() nombreEtoiles: number = 0
  constructor() { }

  ngOnInit(): void {
  }

}
