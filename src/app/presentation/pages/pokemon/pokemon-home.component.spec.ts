import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { PokemonHomeComponent } from './pokemon-home.component';

import { GetPokemonsByIdUsecase } from '@core/usecases/pokemon/get-pokemon-by-id.usecase';
import { PokemonEntity } from '@data/pokemon-repository/entities/pokemon-entity';
import { POKEMON_ENTITY_LIST_MOCK } from 'src/app/mocks/pokemons-entity-list.mock';

class MockGetPokemonsByIdUsecase {
  execute(): Observable<PokemonEntity[]> {
    return of(POKEMON_ENTITY_LIST_MOCK);
  }
}

describe('PokemonHomeComponent', () => {
  let component: PokemonHomeComponent;
  let fixture: ComponentFixture<PokemonHomeComponent>;
  let mockGetPokemonsByIdUsecase: GetPokemonsByIdUsecase;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: GetPokemonsByIdUsecase, useClass: MockGetPokemonsByIdUsecase }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonHomeComponent);
    component = fixture.componentInstance;
    mockGetPokemonsByIdUsecase = TestBed.inject(GetPokemonsByIdUsecase);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call `getPokemons` on init', () => {
    spyOn(component, 'getPokemons');
    component.ngOnInit();

    expect(component.getPokemons).toHaveBeenCalledOnceWith();
  });

  it('should call `getPokemonsById` on `getPokemons` and set `pokemonList`', () => {
    spyOn(mockGetPokemonsByIdUsecase, 'execute').and.returnValue(of(POKEMON_ENTITY_LIST_MOCK));
    component.getPokemons();

    expect(mockGetPokemonsByIdUsecase.execute).toHaveBeenCalledWith(component.pokemonIds);
    expect(component.pokemonList.length).toBe(4);
  });

  it('should set a correct pokemon on `findCorrectPokemon`', () => {
    component.pokemonList = POKEMON_ENTITY_LIST_MOCK;
    component.findCorrectPokemon();

    expect(component.pokemonCorrect).toBeTruthy();
    expect(component.pokemonCorrect).toBeDefined();
  });

  it('should set `isCorrect` to true and `isAnswered` to true when userResponse is correct', () => {
    component.pokemonCorrect = POKEMON_ENTITY_LIST_MOCK[0];
    component.userResponse(POKEMON_ENTITY_LIST_MOCK[0]);

    expect(component.isCorrect).toBeTrue();
    expect(component.isAnswered).toBeTrue();
  });

  it('should set `isCorrect` to false and `isAnswered` to true when userResponse is incorrect', () => {
    component.pokemonCorrect = POKEMON_ENTITY_LIST_MOCK[0];
    component.userResponse(POKEMON_ENTITY_LIST_MOCK[1]);

    expect(component.isCorrect).toBeFalse();
    expect(component.isAnswered).toBeTrue();
  });

  it('should reset the game on `newGame`', () => {
    spyOn(component, 'getPokemons');
    component.newGame(true);

    expect(component.pokemonIds.length).toBe(4);
    expect(component.pokemonCorrect).toBeNull();
    expect(component.pokemonList.length).toBe(0);
    expect(component.isCorrect).toBeFalse();
    expect(component.isAnswered).toBeFalse();
  });
});
