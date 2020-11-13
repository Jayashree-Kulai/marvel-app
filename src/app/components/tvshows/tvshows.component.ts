import { Component, OnInit } from '@angular/core';
import { Tvshow } from 'src/app/interfaces/tvshows';
import { TvshowService } from '../../services/tvshow.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {

  tvshows : Tvshow[];
  isLoading = false;

  constructor(private tvshowService: TvshowService) { }

  ngOnInit(): void {
    this.loadTvshows();
  }

  loadTvshows(): void {
    this.isLoading = true;
    this.tvshows = [];
    this.tvshowService.getTvshowList().subscribe(response => {
      this.tvshows = response.data.results;
      console.log('MOVIES', this.tvshows);

      this.isLoading = false;
    });
  }

}
