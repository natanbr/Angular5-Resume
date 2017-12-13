import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { TagComponent } from './tag/index';
import { Card } from '../../../../data';
import { By } from '@angular/platform-browser';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent, TagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;

    const card = new Card('Title', 'Sub', 'text', ['tag1']);
    component.card = card;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title', () => {
    const de = fixture.debugElement.query(By.css('.card-title'));
    const el = de.nativeElement;

    expect(el.innerText).toBe('Title');
  });

  it('should have Text', () => {
    const de = fixture.debugElement.query(By.css('.card-text'));
    const el = de.nativeElement;

    expect(el.innerText).toBe('text');
  });

  it('should have SubTitle', () => {
    const de = fixture.debugElement.query(By.css('.card-subtitle'));
    const el = de.nativeElement;

    expect(el.innerText).toBe('Sub');
  });

  it('should have no tags when DisplayTags=false', () => {
    component.DisplayTags = false;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('app-tag'));

    expect(de).toBeNull();
  });

  it('should have tags', () => {
    component.DisplayTags = true;
    component.card.Tags = ['A', 'Bb'];
    fixture.detectChanges();

    const debugElements = fixture.debugElement.queryAll(By.css('app-tag'));

    expect(debugElements.length).toBe(component.card.Tags.length);

    debugElements.forEach(de => {
      const el = de.nativeElement;
      expect(el.innerText.length).toBeGreaterThan(0);
    });

  });
});
