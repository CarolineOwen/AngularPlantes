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
  constructor(private route: ActivatedRoute, private router: Router, private planteService: PlanteService) { }

  ngOnInit() {
    const planteId: string | null = this.route.snapshot.paramMap.get('id');
    if (planteId) {
      this.planteService.getPlanteById(+planteId).subscribe(plante => this.plante = plante);
    }
  }

  deletePlanteById(plante: Plante) {
    this.planteService.deletePlante(plante.id).subscribe(() => this.goToPlanteList()
    )
  }

  goToPlanteList() {
    this.router.navigate(['/plantes']);
  }

  goToEditPlante(plante: Plante) {
    this.router.navigate(['/edit/plante', plante.id]);
  }
}
