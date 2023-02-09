import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Plante } from '../plante';
import { PlanteService } from '../plante.service';

@Component({
  selector: 'app-search-plante',
  templateUrl: './search-plante.component.html',
  styleUrls: ['./search-plante.component.css']
})
export class SearchPlanteComponent implements OnInit {

  //recherche de flux de données dans le temps
  searchTerms = new Subject<string>();
  plantes$: Observable<Plante[]>;

  constructor(private router: Router, private planteService: PlanteService) { }

  ngOnInit(): void {
    this.plantes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => this.planteService.searchPlanteList(term))
    );
  }

  search(term: string) {
    this.searchTerms.next(term);
  }

  goToDetail(plante: Plante) {
    const link = ['/plante', plante.id];
    this.router.navigate(link);

  }

}


