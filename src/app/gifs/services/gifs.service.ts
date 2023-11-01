import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private _tagsHistory: string[] = [];

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  // funcion con validaciones
  // esta funcion se llama en searchTag()
  organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 5);
  }

  // funcion que se inyecta en el componente busqueda
  searchTag(tag: string) {
    if (tag.length === 0) return;
    this.organizeHistory(tag);
  }
}
