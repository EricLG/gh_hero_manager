import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes  = [
    { path: '', component:  HomeComponent },  //  path: '/'
    { path: 'freeview',   component:  HeroesComponent },
    { path: 'cards-list', component: CardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
