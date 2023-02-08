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

  constructor(private router: Router, private planteService: PlanteService){}

  ngOnInit(): void {
    this.planteService.getPlanteList().subscribe(planteListe=> this.plantesListe = planteListe);
  }

  goToPlante(plante: Plante){
this.router.navigate(["plante", plante.id ])
  }
}
