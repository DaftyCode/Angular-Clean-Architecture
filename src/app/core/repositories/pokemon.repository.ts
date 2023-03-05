import { Observable } from 'rxjs';

import { PokemonEntity } from '@data/pokemon-repository/entities/pokemon-entity';

export abstract class PokemonRepository {
  abstract getPokemonsById(pokemonsIds: number[]): Observable<PokemonEntity[]>;
}
