import { NgFor, NgIf } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonOptionsComponent } from './pokemon-options.component';

import { POKEMON_ENTITY_LIST_MOCK } from 'src/app/mocks/pokemons-entity-list.mock';

describe('PokemonOptionsComponent', () => {
  let component: PokemonOptionsComponent;
  let fixture: ComponentFixture<PokemonOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgIf, NgFor],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the selected option on click', () => {
    const sendResponseSpy = spyOn(component.sendResponse, 'emit');
    component.userResponse(POKEMON_ENTITY_LIST_MOCK[0]);
    fixture.detectChanges();

    expect(sendResponseSpy).toHaveBeenCalledWith(POKEMON_ENTITY_LIST_MOCK[0]);
  });
});
