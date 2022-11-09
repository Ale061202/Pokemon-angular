import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon-response.interface';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {

  @Input() listadoPokemon!: Pokemon;
  @Output()  onPokemonSelected = new EventEmitter<Pokemon>();

  constructor() { }

  ngOnInit(): void {
  }

  selectPokemon(){
    this. onPokemonSelected.emit(this.listadoPokemon);
  }

}
