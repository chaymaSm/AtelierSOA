import { Component, OnInit } from '@angular/core';
import { LogementService } from '../../services/logement.service';

@Component({
  selector: 'app-logement',
  templateUrl: './logement.component.html',
  styleUrls: ['./logement.component.css']
})
export class LogementComponent implements OnInit {
  logements: any[] = [];  // Liste des logements à afficher
  newLogement = { reference: null, adresse: '', delegation: '', type: '' };
  selectedLogement: any = null;  // Initialisation à null
  deleteLogementReference: number | null = null;

  constructor(private logementService: LogementService) {}

  ngOnInit(): void {
    this.loadLogements();
  }

  loadLogements(): void {
    this.logementService.getAllLogements().subscribe(data => {
      this.logements = data;
    });
  }

  addLogement(): void {
    this.logementService.addLogement(this.newLogement).subscribe(() => {
      this.loadLogements();  // Recharge les logements après ajout
      this.newLogement = { reference: null, adresse: '', delegation: '', type: '' };
    });
  }

  selectLogementForUpdate(logement: any): void {
    this.selectedLogement = { ...logement };  // Prépare un logement pour la mise à jour
  }

  updateLogement(): void {
    if (this.selectedLogement) {
      this.logementService.updateLogement(this.selectedLogement.reference, this.selectedLogement).subscribe(() => {
        this.loadLogements();  // Recharge les logements après mise à jour
        this.selectedLogement = null;  // Réinitialise l'objet sélectionné
      });
    }
  }

  selectLogementForDelete(logement: any): void {
    this.deleteLogementReference = logement.reference;  // Sélectionne un logement pour suppression
  }

  deleteLogement(): void {
    if (this.deleteLogementReference !== null) {
      this.logementService.deleteLogement(this.deleteLogementReference).subscribe(() => {
        this.loadLogements();  // Recharge les logements après suppression
        this.deleteLogementReference = null;  // Réinitialise la référence du logement à supprimer
      });
    }
  }
}
