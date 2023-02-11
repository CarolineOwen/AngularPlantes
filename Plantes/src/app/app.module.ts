import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlanteModule } from './plante/plante.module';

//sert à indiquer que cest un module (donc pas relier à un template html, ce n'est pas un composant, sert à l'architecture)
@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  //importation du planteModule avant le appRouting pour respecter l'ordre des routes des plus spécifiques aux moins spécifiques
  imports: [BrowserModule, FormsModule, HttpClientModule, PlanteModule, AppRoutingModule],
  providers: [],
  //le composant racine
  bootstrap: [AppComponent],
})

//module racine
export class AppModule {}
