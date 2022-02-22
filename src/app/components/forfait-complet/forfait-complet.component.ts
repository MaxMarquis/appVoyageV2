import { Component, Input, OnInit } from '@angular/core';
import { Forfait } from 'src/app/forfait';

@Component({
  selector: 'app-forfait-complet',
  templateUrl: './forfait-complet.component.html',
  styleUrls: ['./forfait-complet.component.css'],
})
export class ForfaitCompletComponent implements OnInit {
  @Input() forfait: Forfait = {
    id: 0,
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

  constructor() { }

  ngOnInit(): void { }

  nombreJours(date1: any, date2: any) {
    var newDate1: any = new Date(date1);
    var newDate2: any = new Date(date2);
    var date: any = Math.floor((newDate2 - newDate1) / (1000 * 60 * 60 * 24));
    return date;
  }
}
