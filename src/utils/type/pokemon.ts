export type StatItem = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
  type:string
};

export type typeItem = {
  slot: number; 
  type: {
    name: string; 
    url: string; 
  };
}

export interface PokemonListItem {
  name: string;
  url: string;
  detail: PokemonDetail;
}

export interface PokemonDetail {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  is_default: boolean;
  order: number;
  abilities: Ability[];
  forms: NamedAPIResource[];
  species: NamedAPIResource;
  sprites: PokemonSprites;
  stats: Stat[];
  types: PokemonType[];
  cries: {
    latest: string;
    legacy: string;
  };
  game_indices: GameIndex[];
  moves: Move[];
  held_items:[];
  past_abilities: Ability[];
  past_types:[];
  location_area_encounters: string;
}

interface Ability {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
}

export interface NamedAPIResource {
  name: string;
  url: string;
}

interface PokemonSprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
}

interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

interface GameIndex {
  game_index: number;
  version: NamedAPIResource;
}

interface Move {
  move: NamedAPIResource;
}
