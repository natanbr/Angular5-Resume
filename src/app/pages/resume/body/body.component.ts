import { Component, OnInit } from '@angular/core';
import { DalService } from '../../../services';
import { Card } from '../../../data';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  Cards: Array<Card>;

  constructor(private dal: DalService) {
    const projects = this.dal.generateResumeData();
    this.Cards = new Array<any>();
    projects.forEach(project => {
      this.Cards.push(new Card(
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
