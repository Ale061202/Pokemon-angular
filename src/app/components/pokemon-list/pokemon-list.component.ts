import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon-response.interface';
import { PokemonService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonSelected!: Pokemon;
  listadoPokemon: Pokemon[] = [];
  
  constructor(private pokemonService: PokemonService) { }
  
  ngOnInit(): void {
    this.pokemonService.pokemonList().subscribe(resp => {
      this.listadoPokemon = resp.results
    })
  }
  
  changeSelected(eventNombrePokemonSeleccionado: Pokemon) {
    this.pokemonSelected = eventNombrePokemonSeleccionado;
  }

}
