import { Component, OnInit, Input } from '@angular/core';
import { TagComponent } from './tag';
import { Card, HasDataComponent } from '../../../../data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, HasDataComponent {

  @Input() data: any;
  private _card: Card;

  DisplayTags: boolean;

  constructor() { }

  get card() { return this._card; }

  ngOnInit() {
    this._card = this.data;
    this.DisplayTags = false;

    if (this.card) {
      this.DisplayTags = this.card.Tags.length > 0;
    }
  }

}
