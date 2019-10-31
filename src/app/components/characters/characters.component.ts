import { Component, OnInit, Input } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters= [];
  charactersFiltered = []
  nameStartsWith: string;

  constructor(private marvelService: MarvelService) { }

  ngOnInit() {
    this.showCharacters()
  }

  showCharacters(){
    this.marvelService.getCharacters("characters").subscribe(res => {
      this.characters = res.data.results
      console.log(this.characters)
    },
    error => {
      console.log(error)
    })
  }

  showCharacterByName(){
    if(this.nameStartsWith){
      this.marvelService.getOneCharacter("characters", this.nameStartsWith).subscribe(res => {
        this.characters = res.data.results
        console.log(this.characters)
      },
      error => {
        console.log(error)
      })
    } else {
      this.showCharacters()
    }
  }

}
