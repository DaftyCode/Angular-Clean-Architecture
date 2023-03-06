import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';
import { PokemonEntity } from '../entities/pokemon-entity';
import { PokemonServiceMapper } from '../mappers/pokemon-service-mapper';

import { PokemonModel } from '@core/domain/pokemon.model';
import { environment } from 'src/environments/environment';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonServiceMapper, PokemonService],
    });

    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get pokemon by id', () => {
    const id = 1;
    const expectedUrl = `${environment.apiUrl}/pokemon/${id}`;
    const expectedResponse: PokemonModel = {
      id: 1,
      name: 'bulbasaur',
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
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    };

    service.getPokemonsById([id]).subscribe((result: PokemonEntity[]) => {
      expect(result).toEqual([expectedEntity]);
    });

    const req = httpMock.expectOne(expectedUrl);

    expect(req.request.method).toEqual('GET');

    req.flush(expectedResponse);
  });
});
