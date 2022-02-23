import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

import { NgRatingBarModule } from 'ng-rating-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ForfaitService } from './forfait.service';

import { MyheaderComponent } from './components/myheader/myheader.component';
import { ForfaitsTableComponent } from './components/forfaits-table/forfaits-table.component';
import { FormulaireForfaitsComponent } from './components/formulaire-forfaits/formulaire-forfaits.component';
import { MiniForfaitComponent } from './components/mini-forfait/mini-forfait.component';
import { ForfaitCompletComponent } from './components/forfait-complet/forfait-complet.component';
import { EtoilesComponent } from './components/etoiles/etoiles.component';
import { DialogFormulaireForfaitComponent } from './components/dialog-formulaire-forfait/dialog-formulaire-forfait.component';

import { ForfaitsParisComponent } from './views/forfaits-paris/forfaits-paris.component';
import { AproposComponent } from './views/apropos/apropos.component';
import { AccueilComponent } from './views/accueil/accueil.component';
import { ForfaitsMexiqueComponent } from './views/forfaits-mexique/forfaits-mexique.component';
import { AdminComponent } from './views/admin/admin.component';
import { NgChartsModule } from 'ng2-charts';
import { ChartsComponent } from './components/charts/charts.component';
import { ChartsAssuranceComponent } from './components/charts-assurance/charts-assurance.component';

@NgModule({
  declarations: [
    AppComponent,
    MiniForfaitComponent,
    ForfaitCompletComponent,
    EtoilesComponent,
    MyheaderComponent,
    AccueilComponent,
    AproposComponent,
    AdminComponent,
    ForfaitsParisComponent,
    ForfaitsMexiqueComponent,
    ForfaitsTableComponent,
    FormulaireForfaitsComponent,
    DialogFormulaireForfaitComponent,
    ChartsComponent,
    ChartsAssuranceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    NgRatingBarModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    NgChartsModule,
  ],
  providers: [ForfaitService],
  bootstrap: [AppComponent],
})
export class AppModule { }
