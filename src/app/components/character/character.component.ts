import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character;
  constructor(private route: ActivatedRoute, private marvelService: MarvelService, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.marvelService.getOneCharacterById(+id)
  }

  onBack() {
    this.router.navigate(['/characters']);
  }
}
