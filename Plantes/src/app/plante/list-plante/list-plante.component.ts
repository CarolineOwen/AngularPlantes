import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plante } from '../plante';
import { PlanteService } from '../plante.service';

@Component({
  selector: 'app-list-plante',
  templateUrl: './list-plante.component.html',
  styleUrls: ['./list-plante.component.css'],
})
export class ListPlanteComponent implements OnInit {

  plantesListe: Plante[];

    //appel des services dans le construteur pour pouvoir les utiliser
  constructor(private router: Router, private planteService: PlanteService){}

  //à l'initialisation du composant récupérer la liste de plantes grâce au service
  ngOnInit(): void {
    this.planteService.getPlanteList().subscribe(planteListe=> this.plantesListe = planteListe);
  }

  //redirection vers plante detail
  goToPlante(plante: Plante){
this.router.navigate(["plante", plante.id ])
  }
}
