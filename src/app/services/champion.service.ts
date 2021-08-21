import { Injectable } from '@angular/core';
import { Champion } from '../model/champion';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChampionService {
  private championUrl = 'api/champions'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  private log(message: string) {
    this.messageService.add(`ChampionServce: ${message}`);
  }
  
/**
 * Handle Http operation that failed.
 * Let the app continue.
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  /** Get all champions */
  getChampions(): Observable<Champion[]> {
    return this.http.get<Champion[]>(this.championUrl).pipe(
      tap((_) => this.log('Fetched Champions')),
      catchError(this.handleError<Champion[]>('getChampions', []))
    );
  }

  /** get a champion based on id */
  getChampion(id: number): Observable<Champion> {
    const url = `${this.championUrl}/${id}`;
    return this.http.get<Champion>(url).pipe(
      tap((_) => this.log(`Fetched Champion: ${id}`)),
      catchError(this.handleError<Champion>(`getChampion id = ${id}`))
    );
  }

  // Update a champion's data
  updateChampion(champion: Champion): Observable<any> {
    return this.http.put(this.championUrl, champion, this.httpOptions).pipe(
      tap((_) =>
        this.log(
          `Updated Champion ${champion.name} with id: id = ${champion.id}`
        )
      ),
      catchError(this.handleError<any>('updateChampion'))
    );
  }

  // add a new champion
  addChampion(champion: Champion): Observable<Champion> {
    return this.http
      .post<Champion>(this.championUrl, champion, this.httpOptions)
      .pipe(
        tap((newChampion: Champion) =>
          this.log(`New Champion "${newChampion.name}" Added`)
        ),
        catchError(this.handleError<Champion>('addChampion'))
      );
  }

  deleteChampion(id: number): Observable<Champion> {
    const url = `${this.championUrl}/${id}`;
    return this.http.delete<Champion>(url, this.httpOptions).pipe(
      tap((_) => this.log(`Deleted id: ${id}`)),
      catchError(this.handleError<Champion>('deleteChampion'))
    );
  }

  searchChampions(term: string): Observable<Champion[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<Champion[]>(`${this.championUrl}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`Found Champions matching "${term}"`)
          : this.log(`No Champions matched with "${term}"`)
      ),
      catchError(this.handleError<Champion[]>('searchChampion'))
    );
  }
}
