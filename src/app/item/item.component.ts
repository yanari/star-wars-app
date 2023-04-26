import { Component, OnInit, Input, Injectable } from '@angular/core';

import { StarWarsService } from '../star-wars.service';
import { Character } from '../list/list.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

@Injectable()
export class ItemComponent implements OnInit {
  @Input() isFirst: any;
  @Input() char!: Character;
  activeSide!: string;
  isFocused!: boolean;
  swService: StarWarsService;
  isCustomImage!: boolean;
  path: string = '';
  name = '';
  user!: string;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
    this.activeSide = this.char.side;
    
    this.user = this.swService.getUserName(this.name, this.char);

    this.name = this.char.name.split('-').join(' ');

    this.path = this.char.image!;
    if (this.char.image === undefined) {
      this.path = `/assets/characters/${this.char.name}.svg`;
    }
    this.isCustomImage = !this.path.startsWith('/assets/characters');

    this.isFocused = this.swService.focusEffect(this.isFocused, this.isFirst);

    setTimeout(() => {
      this.isFocused = false;
    }, 500);
  }

  onAssign(side: string) {
    this.swService.onSideChosen({ name: this.char.name, side: side, image: this.char.image });
    this.activeSide = this.char.side;
  }
}