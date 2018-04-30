import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit {

  heroes: String[] = [];

  constructor() { }

  ngOnInit() {
    this.getHeroesList();
   }

   getHeroesList() {
    this.heroes = ['Brute', 'Tinkerer'];
   }
}
