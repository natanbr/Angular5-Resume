import { Component, OnInit, Type, } from '@angular/core';
import { DalService } from '../../../services';
import { Card } from '../../../data';
import { CardComponent } from './card/index';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  cards: Array<Card>;
  type: Type<any>;

  constructor(private dal: DalService) {

     this.type = CardComponent;
     const projects = this.dal.generateResumeData();
     this.cards = new Array<any>();
     projects.forEach(project => {
       this.cards.push(new Card(
         project.title,
         project.subTitle,
         project.text,
         project.links
       ));
     });
  }

  ngOnInit() {
  }
}
