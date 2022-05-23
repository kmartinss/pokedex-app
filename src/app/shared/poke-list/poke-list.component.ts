import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  public pokemons: any;
  private setPokemons: any;

  constructor(private _pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  public getPokemons() {
    this._pokeApiService.listAllPokemons.subscribe((res) => {
      this.setPokemons = res.results;
      this.pokemons = this.setPokemons;
    });
  }

  public getSearch(value: string) {
    const filter = this.setPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.pokemons = filter;
  }
}
