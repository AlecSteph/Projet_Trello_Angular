import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjetService } from '../../services/projet.service';

@Component({
  selector: 'app-ajouter-projet',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card">
      <h2 class="mb-4">Ajouter un nouveau projet</h2>
      
      <form (ngSubmit)="onSubmit()" #projetForm="ngForm" class="form-container">
        <div class="form-group">
          <label for="nom" class="form-label">Nom du projet</label>
          <input 
            type="text" 
            class="form-control" 
            id="nom" 
            name="nom" 
            [(ngModel)]="nouveauProjet.nom" 
            required
            #nom="ngModel"
            placeholder="Entrez le nom du projet">
          <div *ngIf="nom.invalid && (nom.dirty || nom.touched)" class="error-message">
            Le nom est obligatoire
          </div>
        </div>

        <div class="form-group">
          <label for="statut" class="form-label">Statut</label>
          <select 
            class="form-control" 
            id="statut" 
            name="statut" 
            [(ngModel)]="nouveauProjet.statut"
            required
            #statut="ngModel">
            <option value="" disabled selected>Sélectionnez un statut</option>
            <option value="En attente">En attente</option>
            <option value="En cours">En cours</option>
            <option value="Terminé">Terminé</option>
          </select>
          <div *ngIf="statut.invalid && (statut.dirty || statut.touched)" class="error-message">
            Le statut est obligatoire
          </div>
        </div>

        <div class="form-actions">
          <button type="button" class="btn btn-outline" (click)="annuler()">
            Annuler
          </button>
          <button type="submit" class="btn" [disabled]="projetForm.invalid">
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .form-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 1.5rem;
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    .form-label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: #444;
    }
    
    .form-control {
      width: 100%;
      padding: 0.75rem;
      font-size: 1rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    
    .form-control:focus {
      outline: none;
      border-color: #3f51b5;
      box-shadow: 0 0 0 2px rgba(63, 81, 181, 0.2);
    }
    
    select.form-control {
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 0.75rem center;
      background-size: 12px;
      padding-right: 2.5rem;
    }
    
    .error-message {
      color: #d32f2f;
      font-size: 0.85rem;
      margin-top: 0.25rem;
    }
    
    .form-actions {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      margin-top: 2rem;
      padding-top: 1rem;
      border-top: 1px solid #eee;
    }
    
    button[disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }
    
    button {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.2s, transform 0.1s;
    }
    
    button:active {
      transform: translateY(1px);
    }
  `]
})
export class AjouterProjetComponent {
  nouveauProjet = {
    nom: '',
    statut: ''
  };

  constructor(
    private projetService: ProjetService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (this.nouveauProjet.nom && this.nouveauProjet.statut) {
      this.projetService.ajouterProjet(this.nouveauProjet.nom, this.nouveauProjet.statut);
      this.router.navigate(['/']);
    }
  }

  annuler(): void {
    this.router.navigate(['/']);
  }
}
