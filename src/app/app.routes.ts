import { Routes } from '@angular/router';
import { ListeProjetsComponent } from './pages/liste-projets/liste-projets';
import { DetailProjetComponent } from './pages/detail-projet/detail-projet';
import { AjouterProjetComponent } from './pages/ajouter-projet/ajouter-projet';

export const routes: Routes = [
  { path: '', component: ListeProjetsComponent },
  { path: 'projet/:id', component: DetailProjetComponent },
  { path: 'ajouter', component: AjouterProjetComponent },
];
