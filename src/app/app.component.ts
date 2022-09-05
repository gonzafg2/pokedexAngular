import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public pokemons = [];
  public searchText = "";

  public async getPokemons() {
    const URL = 'https://pokeapi.co/api/v2/pokemon?limit=10';
    try {
      const response = await axios.get(URL);
      const { results } = await response.data;
      this.pokemons = results;
    } catch (error) {
      console.error(error);
    }
  }
}
