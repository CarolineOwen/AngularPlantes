import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plante } from '../plante';
import { PlanteService } from '../plante.service';

@Component({
  selector: 'app-detail-plante',
  templateUrl: './detail-plante.component.html',
  styleUrls: ['./detail-plante.component.css'],
})
export class DetailPlanteComponent implements OnInit {
  planteList: Plante[];
  plante: Plante | undefined;

  //appel des services dans le construteur pour pouvoir les utiliser
  constructor(private route: ActivatedRoute, private router: Router, private planteService: PlanteService) { }

  ngOnInit() {
    //récupérer l'id à l'instant 't' dans la route
    const planteId: string | null = this.route.snapshot.paramMap.get('id');
    if (planteId) {
      this.planteService.getPlanteById(+planteId).subscribe(plante => this.plante = plante);
    }
  }

  deletePlanteById(plante: Plante) {
    this.planteService.deletePlante(plante.id).subscribe(() => this.goToPlanteList()
    )
  }

  //redirection vers liste plante
  goToPlanteList() {
    this.router.navigate(['/plantes']);
  }

  goToEditPlante(plante: Plante) {
    this.router.navigate(['/edit/plante', plante.id]);
  }
}
