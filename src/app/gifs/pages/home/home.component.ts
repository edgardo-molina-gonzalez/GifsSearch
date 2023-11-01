import { Component, OnInit } from '@angular/core';
import { BuscadorComponent } from '../../components/buscador/buscador.component';
import { CardListComponent } from '../../components/cardList/cardList.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BuscadorComponent, CardListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
