import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gifs.interfaces';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="barra-lateral">
      <h1>Search Container</h1>
      <hr />

      <div class="contenedor-boton" *ngFor="let tag of tags">
        <button class="boton-sidebar" (click)="searchButton(tag)">
          {{ tag | titlecase }}
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private tagHistory: GifsService) {}

  get tags() {
    return this.tagHistory.tagsHistory;
  }

  searchButton(tag: any) {
    this.tagHistory.searchTag(tag);
  }
}
