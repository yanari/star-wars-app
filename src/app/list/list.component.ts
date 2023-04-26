import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../star-wars.service';

import { Character } from './list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  @ViewChild('card') item: any;
  characters: Character[] = [];
  loadedSide = 'all';
  subscription: any;
  activatedRoute: ActivatedRoute;
  swService: StarWarsService;

  constructor(activatedRoute: ActivatedRoute, swService: StarWarsService) {
    this.activatedRoute = activatedRoute;
    this.swService = swService;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        let parameters = params as Character;
        this.characters = this.swService.getCharacters(parameters.side);
        this.loadedSide = parameters.side;
      }
    );
    this.subscription = this.swService.charactersChanged.subscribe(
      () => {
        this.characters = this.swService.getCharacters(this.loadedSide);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
