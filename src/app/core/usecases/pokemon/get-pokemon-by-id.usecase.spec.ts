import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { GetPokemonsByIdUsecase } from './get-pokemon-by-id.usecase';

import { PokemonService } from '@data/pokemon-repository/services/pokemon.service';
import { POKEMON_ENTITY_LIST_MOCK } from 'src/app/mocks/pokemons-entity-list.mock';

describe('GetPokemonsByIdUsecase', () => {
  let service: GetPokemonsByIdUsecase;
  let pokemonServiceSpy: jasmine.SpyObj<PokemonService>;

  beforeEach(() => {
    pokemonServiceSpy = jasmine.createSpyObj('PokemonService', ['getPokemonsById']);
    TestBed.configureTestingModule({
      providers: [{ provide: PokemonService, useValue: pokemonServiceSpy }],
    });
    service = TestBed.inject(GetPokemonsByIdUsecase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('execute', () => {
    pokemonServiceSpy.getPokemonsById.and.returnValue(of(POKEMON_ENTITY_LIST_MOCK));

    service.execute([1, 2, 3, 4]).subscribe(data => {
      expect(data.length).toBe(4);
      expect(data[2].url).toBe(POKEMON_ENTITY_LIST_MOCK[2].url);
    });
  });
});
