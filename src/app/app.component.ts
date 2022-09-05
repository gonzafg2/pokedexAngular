import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public searchPoke = 'pikachu';
  public dataPoke = {
    name: '',
    types: [
      {
        type: {
          name: '',
        },
      },
    ],
    sprites: {
      front_default: '',
      other: {
        dream_world: {
          front_default: '',
        },
      },
    },
  };

  ngOnInit(): void {
    this.getPokemon(this.searchPoke);
  }

  public async getPokemon(pokemon: string) {
    try {
      const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const { data } = await axios.get(URL);
      this.dataPoke = data;
    } catch (error) {
      console.error(error);
    }
  }
}
