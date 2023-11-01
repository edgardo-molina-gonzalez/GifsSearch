import { Component, ElementRef, Injectable, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

//!ESTE COMPONENTE ES UN EJEMPLO DE VIEWCHILD()

@Component({
  selector: 'app-buscador',
  standalone: true,
  template: `
    <div class="buscador">
      <h1>GIF SEARCH</h1>
      <!-- se crea la referencia local [#txtTagInput] y se usa como argumento para ViewChild -->
      <input
        type="text"
        placeholder="Search"
        (keyup.enter)="searchTag()"
        #txtTagInput
      />
    </div>
  `,
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent {
  constructor(private tag: GifsService) {}

  /**
   * ViewChild funciona como un query selector
   * En su argumento se pasa la referencia local o un elemento html
   */
  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>;

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.tag.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
