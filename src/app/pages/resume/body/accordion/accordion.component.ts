import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../../../data';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  private _isOpen: boolean;
  private _title: string;

  @Input() card: Card;

  DisplayTags: boolean;

  constructor() {
    this._isOpen = true;
   }

  set isOpen(value: boolean) {
    this._isOpen = value;
    
    this.updateTitleState();
  }

  get isOpen() { return this._isOpen; }

  set title(value: string) { this._title = value; }

  get title() { return this._title; }

  toggleIsOpen(event: MouseEvent) {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }

  updateTitleState() {
    this.title = this.card.Title;
    if (!this.isOpen) {
      this.title += '...';
    }
  }

  ngOnInit() {
    if (this.card) {
      this.DisplayTags = this.card.Tags.length > 0;
      this.title = this.card.Title;
    }
  }
}
