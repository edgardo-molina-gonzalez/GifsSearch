import { Component } from '@angular/core';
import { BuscadorComponent } from '../../components/buscador/buscador.component';
import { CardListComponent } from '../../components/cardList/cardList.component';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BuscadorComponent, CardListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private gifs: GifsService) {}

  get gif() {
    return this.gifs.gifsList;
  }
}
