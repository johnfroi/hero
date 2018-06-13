import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Hero } from '../heroComponent/hero';
import { HeroService } from '../../services/heroServices/hero.service';
import { debounce, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$ : Observable<Hero[]>;  
  private searchTerm = new Subject<string>();

  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.heroes$  = this.searchTerm.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHeroes(term))
    )
  }
  search(term: string): void{
    this.searchTerm.next(term);
  }
}
