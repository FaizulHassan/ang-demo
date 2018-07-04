import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError,map,tap } from 'rxjs/operators';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroService {
	
	private heroesUrl = 'api/heroes'; 
	

  constructor(private messageService: MessageService,private http:HttpClient) { 
		
	}

	private log(message:string){
		this.messageService.add('HeroService :'+ message)
	}

		// Below Function is W/O API

  	/*getHeroes(): Observable<Hero[]> {
				this.messageService.add('HeroService : Fetched heroes');
				return of(HEROES);
			}*/

		// Simple Function to Get value from API

		/* getHeroes(): Observable<Hero[]>{
				return this.http.get<Hero[]>(this.heroesUrl)
			} */

		
		// Below Function is With API call

	getHeroes(): Observable<Hero[]>{
		return this.http.get<Hero[]>(this.heroesUrl)
	}

	/** GET hero by id. Will 404 if id not found */
	getHero(id: number): Observable<Hero> {
		const url = `${this.heroesUrl}/${id}`;
		console.log('url..',this.http.get<any>(url));
		return this.http.get<any>(url);
	}
	
	/** PUT: update the hero on the server */
	updateHero (hero: Hero): Observable<any> {		
		return this.http.put(this.heroesUrl, hero,httpOptions);
	}

	/** POST: add a new hero to the server */
	addHero (hero: any): Observable<any> {
		return this.http.post<any>(this.heroesUrl, hero, httpOptions);
	}

	/* Deleting a Hero */
	deleteHero(hero: Hero | number){
		const id = typeof hero === 'number' ? hero : hero.id;
		const url = `${this.heroesUrl}/${id}`
		return this.http.delete<Hero>(url,httpOptions) 
	}

	searchHeroes(term:string): Observable<Hero[]> {
		if(!term.trim()){
			// if not search term, return empty hero array.
			return of([]);
		}
		return this.http.get<Hero[]>(`api/heroes/?name=${term}`)
	}
}