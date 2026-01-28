import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProjetService {
  // Liste initiale des projets respectant la structure imposée
  private projets = [
    { id: 1, nom: 'Refonte Site Web', statut: 'En cours' },
    { id: 2, nom: 'Application Mobile', statut: 'Terminé' }
  ];

  getProjets() { return this.projets; }

  getProjetById(id: number) { 
    return this.projets.find(p => p.id === id);
  }

  ajouterProjet(nom: string, statut: string) {
    const newId = this.projets.length > 0 ? Math.max(...this.projets.map(p => p.id)) + 1 : 1;
    this.projets.push({ id: newId, nom, statut });
  }
}