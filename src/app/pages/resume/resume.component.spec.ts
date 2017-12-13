import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeComponent } from './resume.component';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  template: '<p id="header">Mock app-header</p>'
})
class MockHeaderComponent {}

@Component({
  selector: 'app-body',
  template: '<p id="body">Mock app-body</p>'
})
class MockBodyComponent {}

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeComponent, MockHeaderComponent, MockBodyComponent ],
      // schemas:      [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have header', () => {
    const de = fixture.debugElement.query(By.css('#header'));
    const el = de.nativeElement;
    expect(el.textContent).toContain('header');
  });

  it('should have body', () => {
    const de = fixture.debugElement.query(By.css('#body'));
    const el = de.nativeElement;
    expect(el.textContent).toContain('body');
  });
});
