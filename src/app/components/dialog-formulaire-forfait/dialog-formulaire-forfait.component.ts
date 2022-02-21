import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Forfait } from 'src/app/forfait';

@Component({
  selector: 'app-dialog-formulaire-forfait',
  templateUrl: './dialog-formulaire-forfait.component.html',
  styleUrls: ['./dialog-formulaire-forfait.component.css'],
})
export class DialogFormulaireForfaitComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogFormulaireForfaitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Forfait
  ) {}

  fermerDialogue(): void {
    this.dialogRef.close();
  }
}
