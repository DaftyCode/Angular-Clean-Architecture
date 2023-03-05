import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-image',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './pokemon-image.component.html',
  styleUrls: ['./pokemon-image.component.scss'],
})
export class PokemonImageComponent {
  @Input() imageUrl!: string | null;
  @Input() isAnswered = false;
}
