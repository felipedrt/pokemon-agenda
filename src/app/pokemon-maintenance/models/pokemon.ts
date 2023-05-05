import { PokemonAttacks } from "./pokemon-attacks";
import { PokemonWeaknesses } from "./pokemon-weaknesses";

export interface Pokemon {
  id: string,
  name: string,
  nationalPokedexNumber: number,
  imageUrl: string,
  imageUrlHiRes: string,
  types: string[],
  supertype: string,
  subtype: string,
  evolvesFrom: string,
  hp: string,
  number: string,
  artist: string,
  rarity: string,
  series: string,
  set: string,
  setCode: string,
  attacks: PokemonAttacks[],
  weaknesses: PokemonWeaknesses[]
}
