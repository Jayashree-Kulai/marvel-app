import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ComicsComponent } from './components/comics/comics.component';
import { CharactersComponent } from './components/characters/characters.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TvshowsComponent } from './components/tvshows/tvshows.component';
import { VideosComponent } from './components/videos/videos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComicsComponent,
    CharactersComponent,
    MoviesComponent,
    TvshowsComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
