//module qui gère la gestion des plantes

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPlanteComponent } from './list-plante/list-plante.component';
import { DetailPlanteComponent } from './detail-plante/detail-plante.component';
import { BorderCardDirective } from './border-card.directive';
import { RouterModule, Routes } from '@angular/router';
import { PlanteService } from './plante.service';
import { FormsModule } from '@angular/forms';
import { PlanteFormComponent } from './plante-form/plante-form.component';
import { EditPlanteComponent } from './edit-plante/edit-plante.component';
import { AddPlanteComponent } from './add-plante/add-plante.component';
import { SearchPlanteComponent } from './search-plante/search-plante.component';


//Routes liées aux plantes en fonctions des actions
const planteRoutes: Routes = [
  { path: 'edit/plante/:id', component: EditPlanteComponent },
  { path: 'plante/add', component: AddPlanteComponent },
  { path: 'plantes', component: ListPlanteComponent },
  { path: 'plante/:id', component: DetailPlanteComponent },
];

@NgModule({
  //importations des composants liées aux plantes
  declarations: [
    ListPlanteComponent,
    DetailPlanteComponent,
    BorderCardDirective,
    PlanteFormComponent,
    EditPlanteComponent,
    AddPlanteComponent,
    SearchPlanteComponent
  ],
  imports: [
    //commonModule comprendre les directives structurelles ngIf et ngFor par exemple
    CommonModule,
    FormsModule,
    RouterModule.forChild(planteRoutes)
  ],
  //les services disponible que pour le module plante
  providers: [PlanteService]
})

//module des plantes
export class PlanteModule { }
