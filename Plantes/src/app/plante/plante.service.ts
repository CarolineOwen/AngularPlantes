import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Plante } from './plante';

@Injectable()
export class PlanteService {

  constructor(private htpp:HttpClient){}

  getPlanteList() : Observable<Plante[]>{
    //return PLANTES;
    return this.htpp.get<Plante[]>('https://localhost:7095/api/Plantes').pipe(
      tap((response)=> console.table(response)),
      catchError((error)=>{
        console.log(error);
        return ([]);
      }
      )
    )
  }

  getPlanteById(planteId : number): Observable< Plante|undefined>{
return this.htpp.get<Plante>(`https://localhost:7095/api/Plantes/${planteId}`).pipe(
  tap((response)=> console.log(response)),
  catchError((error)=>{
    console.log(error);
    return ([]);
  }
))
  }

  updatePlante(plante: Plante): Observable<Plante|undefined>{
    const httpOptions ={
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };
    return this.htpp.put('https://localhost:7095/api/Plantes', plante, httpOptions).pipe(
     tap((response)=>console.log(response)),
     catchError((error)=>this.handleError(error, undefined)))
  }


  addPlante(plante: Plante): Observable<Plante>{
    const httpOptions ={
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };
    return this.htpp.post<Plante>('https://localhost:7095/api/Plantes', plante, httpOptions).pipe(
      tap((response)=>console.log(response)),
     catchError((error)=>this.handleError(error, undefined))
    )
  }

  deletePlante(planteId: number): Observable<Plante|undefined>{
    return this.htpp.delete(`https://localhost:7095/api/Plantes/${planteId}`).pipe(
      tap((response)=>console.log(response)),
      catchError((error)=>this.handleError(error, undefined))
    );

  }


  private handleError(error: Error, errorValue: any){
console.error(error);
return of(errorValue)
  }
  
  getPlanteTypesList(): string[]{
    return ['Fleur', 'Chaleur', 'Arbre', 'Beau']
  }
}
