import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagComponent } from './tag.component';
import { By } from '@angular/platform-browser';

describe('TagComponent', () => {
  let component: TagComponent;
  let fixture: ComponentFixture<TagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain tag text', () => {
    component.tag = 'A B C';
    fixture.detectChanges();

    expect(getTag()).toBe(component.tag);
  });

  it('should handle null', () => {
    component.tag = null;
    fixture.detectChanges();

    expect(getTag()).toBe('');
  });

  it('should handle undefined', () => {
    component.tag = undefined;
    fixture.detectChanges();

    expect(getTag()).toBe('');
  });

  function getTag() {
    const de = fixture.debugElement.query(By.css('p'));
    const el = de.nativeElement;
    return el.innerText;
  }
});
