import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPlanteComponent } from './list-plante/list-plante.component';
import { DetailPlanteComponent } from './detail-plante/detail-plante.component';
import { BorderCardDirective } from './border-card.directive';
import { PlanteTypeColorPipe } from './plante-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PlanteService } from './plante.service';
import { FormsModule } from '@angular/forms';
import { PlanteFormComponent } from './plante-form/plante-form.component';
import { EditPlanteComponent } from './edit-plante/edit-plante.component';
import { AddPlanteComponent } from './add-plante/add-plante.component';

const planteRoutes: Routes = [
  { path: 'edit/plante/:id', component: EditPlanteComponent },
  { path: 'plante/add', component: AddPlanteComponent },
  { path: 'plantes', component: ListPlanteComponent },
  { path: 'plante/:id', component: DetailPlanteComponent },
];

@NgModule({
  declarations: [
    ListPlanteComponent,
    DetailPlanteComponent,
    BorderCardDirective,
    PlanteTypeColorPipe,
    PlanteFormComponent,
    EditPlanteComponent,
    AddPlanteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(planteRoutes)
  ],
  providers: [PlanteService]
})
export class PlanteModule { }
