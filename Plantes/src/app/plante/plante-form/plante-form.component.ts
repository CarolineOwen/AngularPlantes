import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plante } from '../plante';
import { PlanteService } from '../plante.service';

@Component({
  selector: 'app-plante-form',
  templateUrl: './plante-form.component.html',
  styleUrls: ['./plante-form.component.css']
})
export class PlanteFormComponent implements OnInit {
  @Input() plante: Plante;

  isAddForm: boolean;

  constructor(private planteService: PlanteService, private router: Router) { }

  ngOnInit() {

    this.isAddForm = this.router.url.includes('add');
  }

  onSubmit() {
    if (this.isAddForm) {
      this.planteService.addPlante(this.plante)
        .subscribe(() => this.router.navigate(['/plantes']))
    } else {
      this.planteService.updatePlante(this.plante)
        .subscribe(() => this.router.navigate(['/plante', this.plante.id]))
    }
  }


}
