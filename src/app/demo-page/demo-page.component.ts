import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.css']
})
export class DemoPageComponent implements OnInit {
  heroDisplay : any;

  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getHeroDemo();
  }

  getHeroDemo():any{
    this.heroService.getHeroes().subscribe(param=> this.heroDisplay = param);
  }
}
