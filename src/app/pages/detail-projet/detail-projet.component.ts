import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProjetService, Projet } from '../../services/projet.service';

@Component({
  selector: 'app-detail-projet',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div *ngIf="!projet" class="alert alert-warning">
      Projet introuvable.
    </div>

    <div *ngIf="projet" class="card">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h2>Détails du projet</h2>
        <a routerLink="/" class="btn btn-outline">
          Retour à la liste
        </a>
      </div>
      
      <div class="projet-details">
        <h3 class="mb-3">{{ projet.nom }}</h3>
        <p class="mb-2">
          <strong>Statut :</strong>
          <span class="badge" [style.background]="getStatusColor(projet.statut)">
            {{ projet.statut }}
          </span>
        </p>
        <p><strong>ID :</strong> {{ projet.id }}</p>
      </div>
    </div>
  `,
  styles: [`
    .projet-details {
      padding: 1.5rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .projet-details h3 {
      color: #3f51b5;
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #f0f0f0;
    }
    
    .projet-details p {
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }
    
    .projet-details strong {
      color: #555;
      margin-right: 0.5rem;
    }
  `]
})
export class DetailProjetComponent implements OnInit {
  projet: Projet | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projetService: ProjetService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projet = this.projetService.getProjetById(id);
  }

  getStatusColor(statut: string): string {
    switch (statut) {
      case 'En attente':
        return '#ff9800'; // Orange
      case 'En cours':
        return '#3f51b5'; // Bleu primaire
      case 'Terminé':
        return '#4caf50'; // Vert
      default:
        return '#9e9e9e'; // Gris par défaut
    }
  }
}
