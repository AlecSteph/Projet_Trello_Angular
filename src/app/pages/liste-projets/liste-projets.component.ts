import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjetService, Projet } from '../../services/projet.service';

@Component({
  selector: 'app-liste-projets',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>Liste des projets</h2>
      <a routerLink="/ajouter" class="btn">Ajouter un projet</a>
    </div>
    
    <div *ngIf="projets.length === 0" class="alert alert-info">
      Aucun projet n'a été trouvé.
    </div>

    <div class="grid">
      <div *ngFor="let projet of projets" class="card">
        <h3 class="mb-2">{{ projet.nom }}</h3>
        <p class="mb-3">
          <span class="badge" [style.background]="getStatusColor(projet.statut)">
            {{ projet.statut }}
          </span>
        </p>
        <a [routerLink]="['/projet', projet.id]" class="btn btn-outline">
          Voir les détails
        </a>
      </div>
    </div>
  `
})
export class ListeProjetsComponent implements OnInit {
  projets: Projet[] = [];

  constructor(private projetService: ProjetService) { }

  ngOnInit(): void {
    this.projets = this.projetService.getProjets();
  }

  getStatusColor(statut: string): string {
    switch (statut) {
      case 'En attente':
        return '#ff9800'; 
      case 'En cours':
        return '#3f51b5'; 
      case 'Terminé':
        return '#4caf50'; 
      default:
        return '#9e9e9e'; 
    }
  }
}
