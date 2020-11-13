import { Component, OnInit } from '@angular/core';
import { ComicService } from '../../services/comic.service';
import { Comic } from '../../interfaces/comics';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  pageNo = 1;
  comics: Comic[];
  isLoading = false;

  constructor(private comicService: ComicService) { }

  ngOnInit(): void {
    this.loadComics();
  }

  loadComics(): void {
    this.isLoading = true;
    this.comics = [];
    this.comicService.getComicList().subscribe(response => {
      this.comics = response.data.results;
      console.log('MOVIES', this.comics);

      this.isLoading = false;
    });
  }

}
