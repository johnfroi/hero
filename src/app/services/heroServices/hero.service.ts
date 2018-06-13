import { Injectable } from '@angular/core';
import { Hero } from '../../components/heroComponent/hero';
import { HEROES } from '../../components/heroComponent/mock-heroes';
import { Observable, of } from 'rxjs'; 
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor( private messageService:MessageService) { }

  getHeroes():Observable<Hero[]>{
    this.messageService.add("HeroService: fetched Heroes");
    return of(HEROES);
  }
  getHero(id): Observable<Hero>{
    this.messageService.add(`heroService: Fetch hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id ));
  }
}
