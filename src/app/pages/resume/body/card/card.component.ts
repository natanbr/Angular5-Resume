import { Component, OnInit, Input } from '@angular/core';
import { TagComponent } from './tag';
import { Card } from '../../../../data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  DisplayTags: boolean;

  constructor() {  }

  ngOnInit() {
    if (this.card) {
      this.DisplayTags = this.card.Tags.length > 0;
    }
  }

}
