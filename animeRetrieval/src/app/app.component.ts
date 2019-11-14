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

  // Call anime-service function for retrieving top anime, called by button in app-component
  getAnime() {
    this.animeService.getAnime()
      .subscribe( anime => {
        console.log(`got anime: ${anime}`);
        // Create a header object to be displayed at the top of the table
        this.animeList = [{
          title: 'Title', type: 'Type', episodes: 'Episodes', score: 'Score', rank: 'Rank', header: true,
        }]
        // Set animeList as a constant list of the retrieved anime
        this.animeList = this.animeList.concat(anime);
        // Set filteredList as a copy of animeList for now, to be altered later in lifecycle via search terms
        this.filteredList = this.animeList;
      });
  }

  // Filter out anime in animeList that do not contain the search term, provided as variable "filter"; called by app-component's
  //  text input
  filterAnime(filter) {
    console.log('filter called');
    if (this.filteredList) {
      console.log('in if statement');
      // Both the filter variable and the anime titles are trimmed and set to lower case; "|| anime.header" provided to keep
      //  the top row of the table in the array
      this.filteredList = this.animeList.filter(anime => anime.title.toLowerCase().trim().includes(filter.toLowerCase().trim()) || anime.header);
    }
  }
}
