import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonOptionsComponent } from './pokemon-options.component';

describe('PokemonOptionsComponent', () => {
  let component: PokemonOptionsComponent;
  let fixture: ComponentFixture<PokemonOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PokemonOptionsComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PokemonOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
