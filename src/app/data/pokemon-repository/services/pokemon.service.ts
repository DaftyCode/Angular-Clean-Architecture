import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';

import { PokemonEntity } from '../entities/pokemon-entity';
import { PokemonServiceMapper } from '../mappers/pokemon-service-mapper';

import { PokemonModel } from '@core/domain/pokemon.model';
import { PokemonRepository } from '@core/repositories/pokemon.repository';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService extends PokemonRepository {
  mapper = new PokemonServiceMapper();

  constructor(private http: HttpClient) {
    super();
  }

  getPokemonsById(pokemonsIds: number[]): Observable<PokemonEntity[]> {
    const url = `${environment.apiUrl}/pokemon/`;

    return forkJoin(
      pokemonsIds.flatMap(item => [this.http.get<PokemonModel>(`${url}${item}`).pipe(map(this.mapper.mapTo))])
    );
  }
}
