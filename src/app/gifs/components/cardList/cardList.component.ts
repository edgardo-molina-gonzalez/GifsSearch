import { Component, Input } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { CommonModule } from '@angular/common';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-cardList',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cartas">
      <div *ngFor="let gf of gifs">
        <img [src]="gf.images.downsized_medium.url" alt="gf.title" />
      </div>
    </div>
  `,
  styleUrls: ['./cardList.component.css'],
})
export class CardListComponent {
  constructor(private gifTags: GifsService) {}

  @Input() gifs!: Gif[];
}
