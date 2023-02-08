import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plante } from '../plante';
import { PlanteService } from '../plante.service';

@Component({
  selector: 'app-edit-plante',
  templateUrl: './edit-plante.component.html',
  styleUrls: ['./edit-plante.component.css']
})
export class EditPlanteComponent implements OnInit{

  plante: Plante|undefined;

  constructor(private route: ActivatedRoute, private planteService: PlanteService){}
  ngOnInit() {

    const planteId: string|null = this.route.snapshot.paramMap.get('id');
    if(planteId){

      this.planteService.getPlanteById(+planteId).subscribe(plante=>this.plante = plante);
    }else{
      this.plante = undefined;
    }
  }
}
