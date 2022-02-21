import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Forfait } from 'src/app/forfait';
import { ForfaitService } from 'src/app/forfait.service';
import { DialogFormulaireForfaitComponent } from '../dialog-formulaire-forfait/dialog-formulaire-forfait.component';

@Component({
  selector: 'app-forfaits-table',
  templateUrl: './forfaits-table.component.html',
  styleUrls: ['./forfaits-table.component.css'],
})
export class ForfaitsTableComponent implements OnInit {
  forfaits: Forfait[] = [];
  forfaitSelected?: Forfait;
  columnsToDisplay = [
    'id',
    'dateDepart',
    'dateRetour',
    'destination',
    'villeDepart',
    'nomHotel',
    'actions',
  ];

  constructor(
    private forfaitService: ForfaitService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitService.getForfaits().subscribe((res) => (this.forfaits = res));
  }

  onSelect(forfait?: Forfait): void {
    if (!forfait) {
      this.forfaitSelected = {
        _id: '',
        destination: '',
        villeDepart: '',
        hotel: {
          nom: '',
          coordonnees: '',
          nombreEtoiles: 0,
          nombreChambres: 0,
          caracteristiques: ['', '', ''],
        },
        dateDepart: '',
        dateRetour: '',
        prix: 0,
        rabais: 0,
        vedette: false,
      };
      console.log(this.forfaitSelected);
    } else {
      this.forfaitSelected = forfait;
      console.log(this.forfaitSelected);
    }
    const dialogRef = this.dialog.open(DialogFormulaireForfaitComponent, {
      width: '500px',
      data: this.forfaitSelected,
    });

    dialogRef.afterClosed().subscribe((_) => {
      this.forfaitSelected = undefined;
      this.getForfaits();
    });
  }
  onDelete(forfait: Forfait): void {
    this.forfaitService
      .deleteForfait(forfait._id)
      .subscribe(
        (_) => (this.forfaits = this.forfaits.filter((p) => p !== forfait))
      );
  }
}
