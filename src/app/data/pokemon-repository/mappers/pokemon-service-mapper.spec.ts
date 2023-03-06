import { PokemonServiceMapper } from './pokemon-service-mapper';
import { PokemonEntity } from '../entities/pokemon-entity';

import { PokemonModel } from '@core/domain/pokemon.model';

describe('PokemonServiceMapper', () => {
  let mapper: PokemonServiceMapper;

  beforeEach(() => {
    mapper = new PokemonServiceMapper();
  });

  it('should map from entity to model', () => {
    const entity: PokemonEntity = {
      id: 1,
      name: 'Bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    };

    const expectedModel: PokemonModel = {
      id: 1,
      name: 'Bulbasaur',
      sprites: {
        back_default: '',
        back_female: '',
        back_shiny: '',
        back_shiny_female: '',
        front_default: 'https://pokeapi.co/api/v2/pokemon/1/',
        front_female: '',
        front_shiny: '',
        front_shiny_female: '',
      },
    };

    const mappedModel = mapper.mapFrom(entity);

    expect(mappedModel).toEqual(expectedModel);
  });

  it('should map from model to entity', () => {
    const model: PokemonModel = {
      id: 1,
      name: 'Bulbasaur',
      sprites: {
        back_default: '',
        back_female: '',
        back_shiny: '',
        back_shiny_female: '',
        front_default: 'https://pokeapi.co/api/v2/pokemon/1/',
        front_female: '',
        front_shiny: '',
        front_shiny_female: '',
      },
    };

    const expectedEntity: PokemonEntity = {
      id: 1,
      name: 'Bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    };

    const mappedEntity = mapper.mapTo(model);

    expect(mappedEntity).toEqual(expectedEntity);
  });
});
