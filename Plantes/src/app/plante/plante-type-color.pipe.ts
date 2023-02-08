import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'planteTypeColor'
})
export class PlanteTypeColorPipe implements PipeTransform {

 transform(type:string) : string {
   let color:string;
switch (type) {
  case 'Fleur':
    color = 'pink';
    break;
  case 'Chaleur':
    color = 'yellow';
    break;
  case 'Arbre':
    color = 'green';
    break;
  case 'Beau':
    color = 'light-blue';
    break;
    default:
      color= 'grey';
      break;
}

return 'chip ' + color;
 }

}
