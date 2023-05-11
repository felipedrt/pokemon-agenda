import { PokemonAttacks } from "./pokemon-attacks";
import { PokemonResistance } from "./pokemon-resistance";
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
  evolvesFrom?: string,
  hp: string,
  retreatCost: string[],
  convertedRetreatCost: number,
  number: string,
  artist: string,
  rarity: string,
  series: string,
  set: string,
  setCode: string,
  text: string[],
  attacks: PokemonAttacks[],
  resistances: PokemonResistance[],
  weaknesses: PokemonWeaknesses[]
}
