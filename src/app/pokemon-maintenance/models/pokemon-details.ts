import { PokemonAbility } from "./pokemon-ability";
import { PokemonAttacks } from "./pokemon-attacks";
import { PokemonResistance } from "./pokemon-resistance";
import { PokemonWeaknesses } from "./pokemon-weaknesses";

export interface PokemonDetail {
  id: string,
  name: string,
  nationalPokedexNumber: number,
  imageUrl: string,
  imageUrlHiRes: string,
  types: string[],
  supertype: string,
  subtype: string,
  evolvesFrom: string,
  ability: PokemonAbility,
  hp: string,
  retreatCost: string[],
  convertedRetreatCost: number,
  number: string,
  artist: string,
  rarity: string,
  series: string,
  set: string,
  setCode: string,
  attacks: PokemonAttacks[],
  resistances: PokemonResistance[],
  weaknesses: PokemonWeaknesses[]
}
