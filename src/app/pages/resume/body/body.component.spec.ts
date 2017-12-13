import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyComponent } from './body.component';
import { By } from '@angular/platform-browser';
import { DalService } from '../../../services';
import { CardComponent } from './card/index';
import { TagComponent } from './card/tag/index';

describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyComponent, CardComponent, TagComponent ],
      providers: [ DalService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // const de = fixture.debugElement.query(By.css('ul'));
    expect(component).toBeTruthy();
  });
});
