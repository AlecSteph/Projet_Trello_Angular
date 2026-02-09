import { Routes } from '@angular/router';
import { ListeProjetsComponent } from './pages/liste-projets/liste-projets.component';
import { DetailProjetComponent } from './pages/detail-projet/detail-projet.component';
import { AjouterProjetComponent } from './pages/ajouter-projet/ajouter-projet.component';

export const routes: Routes = [
  { path: '', component: ListeProjetsComponent },
  { path: 'projet/:id', component: DetailProjetComponent },
  { path: 'ajouter', component: AjouterProjetComponent },
  { path: '**', redirectTo: '' } 
];
