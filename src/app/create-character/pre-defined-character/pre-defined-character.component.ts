import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { StarWarsService } from '../../star-wars.service';
import { Character } from 'src/app/list/list.model';

@Component({
  selector: 'app-pre-defined-character',
  templateUrl: './pre-defined-character.component.html',
  styleUrls: ['./pre-defined-character.component.css']
})
export class PreDefinedCharacterComponent {
  router: Router;
  swService: StarWarsService;
  selectedSide = '';
  sides: string[] | undefined;
  display: string | undefined;
  allCharacters: Partial<Character>[] = [];

  constructor(swService: StarWarsService, router: Router) {
    this.swService = swService;
    this.router = router;
  }

  ngOnInit() {
    this.sides = this.swService.getSides();
    this.display = window.matchMedia('(max-width: 25rem)').matches ? 'Side' : 'Choose Side';
    const allChars = this.swService.getAllPossibleCharacters();
    allChars.map((char) => {
      this.allCharacters.push({ name: char.name, image: char.name });
    });
  }

  onSubmit(submittedForm: NgForm) {
    if (submittedForm.invalid) { return; }
    const value = submittedForm.value;
    this.swService.addCharacter(value.name, value.side, `/assets/characters/${value.name}.svg`);
    this.router.navigateByUrl('/characters')
      .then(() => {},
      (e) => {
        console.log(e);
      });
    this.swService.userSubmitted = true;
  }
}
