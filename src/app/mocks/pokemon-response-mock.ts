import { Pokemon } from "../modules/pokemon-maintenance/models/pokemon";

export const POKEMON_RESPONSE_MOCK: Pokemon = {
  "id": "swsh4-177",
  "name": "Aegislash V",
  "nationalPokedexNumber": 681,
  "imageUrl": "https://images.pokemontcg.io/swsh4/177.png",
  "imageUrlHiRes": "https://images.pokemontcg.io/swsh4/177_hires.png",
  "types": [
    "Metal"
  ],
  "supertype": "Pokémon",
  "subtype": "V",
  "hp": "210",
  "retreatCost": [
    "Colorless",
    "Colorless",
    "Colorless"
  ],
  "convertedRetreatCost": 3,
  "number": "177",
  "artist": "aky CG Works",
  "rarity": "Rare Holo V",
  "series": "Sword & Shield",
  "set": "Vivid Voltage",
  "setCode": "swsh4",
  "text": [
    "V rule: When your Pokémon V is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Metal",
        "Colorless"
      ],
      "name": "Slash",
      "text": "",
      "damage": "50",
      "convertedEnergyCost": 2
    },
    {
      "cost": [
        "Metal",
        "Metal",
        "Colorless"
      ],
      "name": "Sonic Edge",
      "text": "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
      "damage": "130",
      "convertedEnergyCost": 3
    }
  ],
  "resistances": [
    {
      "type": "Grass",
      "value": "-30"
    }
  ],
  "weaknesses": [
    {
      "type": "Fire",
      "value": "×2"
    }
  ],
};
