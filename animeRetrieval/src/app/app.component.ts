import { Component } from '@angular/core';

import { AnimeService } from './anime.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anime-retrieval';

  animeList;
  filteredList;

  constructor(
    private animeService: AnimeService,
  ) {};

  getAnime() {
    this.animeService.getAnime()
      .subscribe( anime => {
        console.log(`got anime: ${anime}`);
        this.animeList = [{
          title: 'Title', type: 'Type', episodes: 'Episodes', score: 'Score', rank: 'Rank', header: true,
        }]
        this.animeList = this.animeList.concat(anime);
        this.filteredList = this.animeList;
      });
  }

  filterAnime(filter) {
    console.log('filter called');
    if (this.filteredList) {
      console.log('in if statement');
      this.filteredList = this.animeList.filter(anime => anime.title.toLowerCase().trim().includes(filter.toLowerCase().trim()) || anime.header);
    }
  }
}
