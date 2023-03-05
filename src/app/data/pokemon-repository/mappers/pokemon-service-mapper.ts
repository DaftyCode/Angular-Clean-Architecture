import { PokemonEntity } from '../entities/pokemon-entity';

import { Mapper } from '@base/mapper';
import { PokemonModel } from '@core/domain/pokemon.model';

export class PokemonServiceMapper extends Mapper<PokemonEntity, PokemonModel> {
  mapFrom(param: PokemonEntity): PokemonModel {
    return {
      id: param.id,
      name: param.name,
      sprites: {
        back_default: '',
        back_female: '',
        back_shiny: '',
        back_shiny_female: '',
        front_default: param.url,
        front_female: '',
        front_shiny: '',
        front_shiny_female: '',
      },
    };
  }

  mapTo(param: PokemonModel): PokemonEntity {
    return {
      id: param.id,
      name: param.name,
      url: param.sprites.front_default,
    };
  }
}
