import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { StarWarsService } from '../../star-wars.service';
import { Character } from './results.model';

@Component({
  selector: 'app-user-defined-character',
  templateUrl: './user-defined-character.component.html',
  styleUrls: ['./user-defined-character.component.css']
})

@Injectable()
export class UserDefinedCharacterComponent implements OnInit {
  swService: StarWarsService;
  httpClient: HttpClient;
  router: Router;
  display: string | undefined;
  selectedSide: string | undefined;
  sides: string[] = [];
  chars: Character[] = [];

  constructor(
    swService: StarWarsService,
    httpClient: HttpClient,
    router: Router
  ) {
    this.swService = swService;
    this.httpClient = httpClient;
    this.router = router;
  }

  ngOnInit() {
    this.sides = this.swService.getSides();
    this.display = window.matchMedia('(max-width: 25rem)').matches ? 'Side' : 'Choose Side';
  }

  onSubmit(submittedForm: NgForm) {
    if (submittedForm.invalid) { return; }
    const value = submittedForm.value;
    this.swService.addCharacter(value.name, value.side, value.image);
    this.router.navigateByUrl('/characters')
      .then(() => {},
      (e) => {
        console.log(e);
      });
    this.swService.userSubmitted = true;
  }
}
