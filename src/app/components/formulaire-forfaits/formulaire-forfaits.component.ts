import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Forfait } from 'src/app/forfait';
import { ForfaitService } from 'src/app/forfait.service';

@Component({
  selector: 'app-formulaire-forfaits',
  templateUrl: './formulaire-forfaits.component.html',
  styleUrls: ['./formulaire-forfaits.component.css'],
})
export class FormulaireForfaitsComponent implements OnInit {
  @Input() forfait: Forfait = {
    id: 0,
    destination: '',
    villeDepart: '',
    hotel: {
      nom: '',
      coordonnees: '',
      nombreEtoiles: 10,
      nombreChambres: 0,
      caracteristiques: [],
    },
    dateDepart: '',
    dateRetour: '',
    prix: 0,
    rabais: 0,
    vedette: false,
  };
  @Output() majTable = new EventEmitter();

  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void { }

  onSave(forfaitForm: NgForm) {
    if (forfaitForm.valid) {
      if (this.forfait.id != null && this.forfait.id != 0) {
        // Si on a un id, on doit modifier le produit
        this.forfaitService.editForfait(this.forfait).subscribe((_) => {
          this.majTable.emit();
        });
      } else {
        // Sinon, on doit ajouter le produit
        console.log(this.forfait)
        this.forfaitService.addForfait(this.forfait).subscribe((_) => {
          this.majTable.emit();
        });
      }
    }
  }

  onCancel() {
    this.majTable.emit();
  }
}
