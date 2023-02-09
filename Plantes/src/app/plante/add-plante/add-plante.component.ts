import { Component, OnInit } from '@angular/core';
import { Plante } from '../plante';

@Component({
  selector: 'app-add-plante',
  templateUrl: './add-plante.component.html',
  styleUrls: ['./add-plante.component.css']
})
export class AddPlanteComponent implements OnInit {

  plante: Plante;

  ngOnInit() {
    this.plante = new Plante;
  }

}
