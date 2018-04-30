import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes  = [
    { path: '', component:  HomeComponent },  //  path: '/'
    { path: 'freeview',   component:  HeroesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
