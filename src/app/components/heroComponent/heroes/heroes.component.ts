import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import { HeroService } from '../../../services/heroServices/hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero:Hero = {
    id:1,
    name:"Windstorm"
  };
  heroes:Hero[];
  selectedHero:Hero;

  constructor(private heroServices:HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes():void{
    this.heroServices.getHeroes().subscribe((heroes)=>{
      this.heroes=heroes;
    });
  }

  onSelect(hero:Hero){
    this.selectedHero=hero;
  }

}
