import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSolutionComponent } from './pokemon-solution.component';

describe('PokemonSolutionComponent', () => {
  let component: PokemonSolutionComponent;
  let fixture: ComponentFixture<PokemonSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonSolutionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the selected option on click', () => {
    const isNewGameSpy = spyOn(component.isNewGame, 'emit');
    component.newGame();
    fixture.detectChanges();

    expect(isNewGameSpy).toHaveBeenCalledWith(true);
  });
});
