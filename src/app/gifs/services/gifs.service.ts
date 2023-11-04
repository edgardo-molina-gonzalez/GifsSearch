import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {
  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  private apiKey: string = 'Rvs5aM4mzwxOpG1SdgPt7WQ4rGYis2Ov';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  gifsList: Gif[] = [];

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
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.searchLocalStorge();
  }

  // guardar en local storage
  private searchLocalStorge() {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  // trae la lista guardada en el local storage, se llama en el constructor
  private loadLocalStorage() {
    if (!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
  }

  // funcion que se inyecta en el componente busqueda
  searchTag(tag: string) {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    // esta instancia concetra todos los query params y se manda como segundo argumento
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 30)
      .set('q', tag);

    return (
      this.http
        // .get(`${this.serviceUrl}/search?api_key=${this.apiKey}&q=${tag}&limit=5`)

        .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
        .subscribe((res) => (this.gifsList = res.data))
    );
  }
}
