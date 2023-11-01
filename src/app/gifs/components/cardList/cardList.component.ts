import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cardList',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardList.component.html',
  styleUrls: ['./cardList.component.css'],
})
export class CardListComponent {
  constructor(private gifTags: GifsService) {}

  get tags() {
    return this.gifTags.tagsHistory;
  }
}
