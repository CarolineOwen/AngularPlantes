import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


//routes globales
const routes: Routes = [
  //si url basique localhost au lancement du site dirige vers la page d'accueil avec la liste de plantes
  { path: '', redirectTo: '/plantes', pathMatch: 'full' },
  //si url invalide (n'importe quoi) redirection vers page d'erreur (composant PageNotFound), "**" bien le déclarer en dernier car sélectionne toutes les routes, angular lit les routes de haut en bas
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
