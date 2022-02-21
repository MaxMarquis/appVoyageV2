import { Component, Input, OnInit } from '@angular/core';
import { Forfait } from 'src/app/forfait';
import { FORFAITS } from 'src/app/mock-forfaits';
import { ForfaitCompletComponent } from '../forfait-complet/forfait-complet.component';

@Component({
  selector: 'app-mini-forfait',
  templateUrl: './mini-forfait.component.html',
  styleUrls: ['./mini-forfait.component.css'],
})
export class MiniForfaitComponent implements OnInit {
  @Input() forfait: Forfait = {
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

  constructor() {}

  ngOnInit(): void {}

  // Tentative de compteur entre les dates, mais ne fonctionne pas :)
  nombreJours(date1: any, date2: any) {
    var newDate1: any = new Date(date1);
    var newDate2: any = new Date(date2);
    var res: any = Math.floor((newDate2 - newDate1) / (1000 * 60 * 60 * 24));
    return res;
  }
}
