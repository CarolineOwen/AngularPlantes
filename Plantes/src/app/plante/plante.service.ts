import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Plante } from './plante';

@Injectable()
export class PlanteService {

  constructor(private htpp: HttpClient) { }

  //les actions CRUD:

  //GET All
  getPlanteList(): Observable<Plante[]> {
    //return PLANTES;
    return this.htpp.get<Plante[]>('https://localhost:7095/api/Plantes').pipe(
      tap((response) => console.table(response)),
      catchError((error) => {
        console.log(error);
        return ([]);
      }
      )
    )
  }

  //GET By Id
  getPlanteById(planteId: number): Observable<Plante | undefined> {
    return this.htpp.get<Plante>(`https://localhost:7095/api/Plantes/${planteId}`).pipe(
      tap((response) => console.log(response)),
      catchError((error) => {
        console.log(error);
        return ([]);
      }
      ))
  }

  //CREATE
  addPlante(plante: Plante): Observable<Plante> {
    const httpOptions = {
      headers: new HttpHeaders({
        'enctype': 'multipart/form-data'
      })
    };
    return this.htpp.post<Plante>('https://localhost:7095/api/Plantes', plante, httpOptions).pipe(
      tap((response) => console.log(response)),
      catchError((error) => this.handleError(error, undefined))
    )
  }
  
//UPDATE
  updatePlante(plante: Plante): Observable<Plante | undefined> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    };
    return this.htpp.put('https://localhost:7095/api/Plantes', plante, httpOptions).pipe(
      tap((response) => console.log(response)),
      catchError((error) => this.handleError(error, undefined)))
  }

  //DELETE
  deletePlante(planteId: number): Observable<Plante | undefined> {
    return this.htpp.delete(`https://localhost:7095/api/Plantes/${planteId}`).pipe(
      tap((response) => console.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );

  }


  //Bloc de Recherche
  searchPlanteList(term: string): Observable<Plante[]> {
    if (term.length <= 1) {
      return of([]);
    };
    return this.htpp.get<Plante[]>(`https:localhost:7095/api/Plantes/?name=${term}`).pipe(
      tap((response) => console.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  //FONCTION d'erreur
  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue)
  }


}
