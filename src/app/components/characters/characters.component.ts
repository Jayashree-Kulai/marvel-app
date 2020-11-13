import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../interfaces/characters';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  isloading=false;
  characterList:Character[];

  constructor(private movieservice: CharacterService) { }

  ngOnInit(): void {
    this.loadCharacters();

  }
  loadCharacters(): void {
    this.isloading=true;
    this.movieservice.getCharcaterList().subscribe(response => {
      this.characterList = response.data.results;
      console.log("characters...........",this.characterList)
      console.log('Charcters', response);
      this.isloading=false;
    });
  }

}