import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './views/accueil/accueil.component';
import { AdminComponent } from './views/admin/admin.component';
import { AproposComponent } from './views/apropos/apropos.component';
import { ForfaitsMexiqueComponent } from './views/forfaits-mexique/forfaits-mexique.component';
import { ForfaitsParisComponent } from './views/forfaits-paris/forfaits-paris.component';

const routes: Routes = [
  { path: 'Accueil', component: AccueilComponent },
  { path: 'ForfaitsParis', component: ForfaitsParisComponent },
  { path: 'ForfaitsMexique', component: ForfaitsMexiqueComponent },
  { path: 'Apropos', component: AproposComponent },
  { path: 'Admin', component: AdminComponent },
  { path: '', redirectTo: '/Accueil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
