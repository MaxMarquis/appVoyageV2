import { Component } from '@angular/core';
import { Forfait } from './forfait';
import { ForfaitService } from './forfait.service';
// import { FORFAITS } from './mock-forfaits';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  forfaits: Forfait[] = [];

  constructor(private forfaitService: ForfaitService){}

  ngOnInit():void {
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitService.getForfaits().subscribe(res => this.forfaits = res)
  }
}
