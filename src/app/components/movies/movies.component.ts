import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../interfaces/movies';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  pageNo = 1;
  movies: Movie[];
  isLoading = false;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.isLoading = true;
    this.movies = [];
    this.movieService.getMovieList().subscribe(response => {
      this.movies = response.data.results;
      console.log('MOVIES', this.movies);

      this.isLoading = false;
    });
  }

}
