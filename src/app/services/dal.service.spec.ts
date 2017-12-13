import { TestBed, inject } from '@angular/core/testing';

import { DalService } from './dal.service';

describe('DalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DalService]
    });
  });

  it('should be created', inject([DalService], (service: DalService) => {
    expect(service).toBeTruthy();
  }));

  it('should return data', inject([DalService], (service: DalService) => {
    const data = service.generateResumeData();
    expect(data.length).toBeGreaterThan(0);
    expect(data[0].title).toBeDefined();
    expect(data[0].subTitle).toBeDefined();
    expect(data[0].text).toBeDefined();
    expect(data[0].links).toBeDefined();
  }));

});
