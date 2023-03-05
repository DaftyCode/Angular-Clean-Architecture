export interface PokemonListModel {
  count: number;
  next: string;
  previous: null;
  results: PokemonListResultModel[];
}

export interface PokemonListResultModel {
  name: string;
  url: string;
}

export interface PokemonModel {
  id: number;
  name: string;
  base_experience?: number;
  height?: number;
  is_default?: boolean;
  order?: number;
  weight?: number;
  abilities?: AbilityModel[];
  forms?: SpeciesModel[];
  game_indices?: GameIndexModel[];
  held_items?: HeldItemsModel[];
  location_area_encounters?: string;
  moves?: MoveModel[];
  SpeciesModel?: SpeciesModel;
  sprites: SpritesModel;
  stats?: StatModel[];
  types?: TypeModel[];
  past_types?: PastTypesModel[];
}

export interface AbilityModel {
  ability: SpeciesModel;
  is_hidden: boolean;
  slot: number;
}

export interface SpeciesModel {
  name: string;
  url: string;
}

export interface GameIndexModel {
  game_index: number;
  version: SpeciesModel;
}

export interface HeldItemsModel {
  item: SpeciesModel;
  version_details: VersionDetailModel[];
}

export interface VersionDetailModel {
  rarity: number;
  version: SpeciesModel;
}

export interface MoveModel {
  move: SpeciesModel;
  version_group_details: VersionGroupDetailModel[];
}

export interface VersionGroupDetailModel {
  level_learned_at: number;
  move_learn_method: SpeciesModel;
  version_group: SpeciesModel;
}

export interface SpritesModel {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other?: OtherModel;
  versions?: VersionsModel;
}

export interface OtherModel {
  dream_world: DreamWorldModel;
  home: HomeModel;
  'official-artwork': OfficialArtworkModel;
}

export interface OfficialArtworkModel {
  front_default: string;
  front_shiny: string;
}

export interface DreamWorldModel {
  front_default: string;
  front_female: null;
}

export interface VersionsModel {
  'generation-i': GenerationIModel;
  'generation-ii': GenerationIiModel;
  'generation-iii': GenerationIiiModel;
  'generation-iv': GenerationIvModel;
  'generation-v': GenerationVModel;
  'generation-vi': { [key: string]: HomeModel };
  'generation-vii': GenerationViiModel;
  'generation-viii': GenerationViiiModel;
}

export interface GenerationIModel {
  'red-blue': RedBlue;
  yellow: RedBlue;
}

export interface GenerationIiModel {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
}

export interface GenerationIiiModel {
  emerald: OfficialArtworkModel;
  'firered-leafgreen': Gold;
  'ruby-sapphire': Gold;
}

export interface GenerationIvModel {
  'diamond-pearl': SpritesModel;
  'heartgold-soulsilver': SpritesModel;
  platinum: SpritesModel;
}

export interface GenerationVModel {
  'black-white': SpritesModel;
}

export interface GenerationViiModel {
  icons: DreamWorldModel;
  'ultra-sun-ultra-moon': HomeModel;
}

export interface GenerationViiiModel {
  icons: DreamWorldModel;
}

export interface StatModel {
  base_stat: number;
  effort: number;
  stat: SpeciesModel;
}

export interface TypeModel {
  slot: number;
  type: SpeciesModel;
}

export interface PastTypesModel {
  generation: SpeciesModel;
  types: TypeModel[];
}

export interface RedBlue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface Crystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

export interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent?: string;
}

export interface HomeModel {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}
