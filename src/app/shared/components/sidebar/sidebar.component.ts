import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private tagHistory: GifsService) {}

  get tags() {
    return this.tagHistory.tagsHistory;
  }
}
