import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  template: `
    <h2>HEROES</h2>
    <p>Get your heroes here</p>
    <button routerLink="/sidekicks">Go to sidekicks</button>
  `,
  // templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
