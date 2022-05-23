import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  constructor(private http: HttpClient) {}

  private url: string = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';

  public get listAllPokemons(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap((res) => res),
      tap((res) => {
        res?.results?.map((pokemons: any) => {
          this.getPokemonsByUrl(pokemons.url).subscribe(
            (res) => (pokemons.status = res)
          );
        });
      })
    );
  }

  public getPokemonsByUrl(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(map((res) => res));
  }

}
