import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon:PokemonData | any
  name:string = "Bulbassaur"
  atributesTypes:string[] = ['FIRE', 'ROCK']
  constructor(
    private service:PokemonServiceService
  ) { }

  ngOnInit(): void {
    this.service.getPokemon("bulbasaur").subscribe(
      {
        next: (res) =>{

          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types:res.types
          }

           console.log(res)
          console.log(this.pokemon)

          },
        error:(err) => console.log(err)
    }
  )
  }

}
