import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plante } from '../plante';
import { PlanteService } from '../plante.service';

@Component({
  selector: 'app-plante-form',
  templateUrl: './plante-form.component.html',
  styleUrls: ['./plante-form.component.css']
})
export class PlanteFormComponent implements OnInit{
@Input() plante : Plante;
  types: string[];
  isAddForm: boolean;

  constructor(private planteService: PlanteService, private router: Router){}

  ngOnInit() {
    this.types = this.planteService.getPlanteTypesList();
    this.isAddForm = this.router.url.includes('add');
  }

  hasType(type: string): boolean{
return this.plante.types.includes(type)

  }

  selectType($event: Event, type:string){
const isChecked: boolean = ($event.target as HTMLInputElement).checked;

if(isChecked){
  this.plante.types.push(type);
}else{
  const index = this.plante.types.indexOf(type);
  this.plante.types.splice(index,1);
}
  }

  onSubmit(){
    if(this.isAddForm){
this.planteService.addPlante(this.plante)
.subscribe((plante: Plante)=> this.router.navigate(['/plante', plante.id]))
    }else{
      this.planteService.updatePlante(this.plante)
      .subscribe(()=> this.router.navigate(['/plante', this.plante.id]))
    }
  
// console.log('envoyé');
// this.router.navigate(['/plante', this.plante.id]);
  }

  isTypesValid(type: string): boolean{
    if(this.plante.types.length == 1 && this.hasType(type)){
return false;
    }
    
return true
  }
}
