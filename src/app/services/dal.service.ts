import { Injectable } from '@angular/core';
import { DataResume } from '../data';

@Injectable()
export class DalService {

  constructor() { }

  generateResumeData(): any {
    return DataResume.getData().Projects.map( entry => {
      return {
        title: entry.title,
        subTitle: entry.time,
        text: entry.summery,
        links: entry.tags
      };
    });
  }
}
