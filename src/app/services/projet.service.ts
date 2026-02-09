import { Injectable, signal } from '@angular/core';

export interface Projet {
  id: number;
  nom: string;
  statut: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  // Utilisation d'un signal pour la liste des projets (Bonus)
  private projets = signal<Projet[]>([
    { id: 1, nom: 'Projet 1', statut: 'En cours' },
    { id: 2, nom: 'Projet 2', statut: 'Terminé' },
    { id: 3, nom: 'Projet 3', statut: 'En attente' }
  ]);

  constructor() { }

  // Récupérer tous les projets
  getProjets() {
    return this.projets();
  }

  // Récupérer un projet par son id
  getProjetById(id: number): Projet | undefined {
    return this.projets().find(projet => projet.id === id);
  }

  // Ajouter un nouveau projet
  ajouterProjet(nom: string, statut: string) {
    const nouveauProjet: Projet = {
      id: this.genererNouvelId(),
      nom,
      statut
    };
    
    this.projets.update(projets => [...projets, nouveauProjet]);
    return nouveauProjet;
  }

  // Générer un nouvel ID unique
  private genererNouvelId(): number {
    const ids = this.projets().map(p => p.id);
    return ids.length > 0 ? Math.max(...ids) + 1 : 1;
  }
}