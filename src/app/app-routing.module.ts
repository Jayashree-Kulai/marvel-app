import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicsComponent } from './components/comics/comics.component';
import { CharactersComponent } from './components/characters/characters.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TvshowsComponent } from './components/tvshows/tvshows.component';
import { VideosComponent } from './components/videos/videos.component';

const routes: Routes = [
  {
    path : 'comics',
    component : ComicsComponent
  },
  {
    path : 'characters',
    component : CharactersComponent
  },
  {
    path : 'movies',
    component : MoviesComponent
  },
  {
    path : 'TVshows',
    component : TvshowsComponent
  },
  {
    path : 'videos',
    component : VideosComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
