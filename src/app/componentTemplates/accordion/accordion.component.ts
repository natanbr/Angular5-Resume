import { Component, OnInit, Input, AfterViewInit, ComponentFactoryResolver, ViewChild, Type } from '@angular/core';

import { AccordionDirective } from './accordion.directive';
import { HasDataComponent } from '../../data';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;

  @Input() data: any;
  @Input() component: Type<any>;

  @ViewChild(AccordionDirective) accordionDirective: AccordionDirective;

  private _isOpen: boolean;
  private _title: string;
  private _subTitle: string;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this._isOpen = false;
  }

  ngOnInit(): void {
    this.initializeVisualComponentsState();
    this.injectContentIntoTemplateDirective();
  }

  initializeVisualComponentsState() {
    this._title = this.title;
    this._subTitle = this.subTitle;

    this.updateTitleState();
  }

  injectContentIntoTemplateDirective(){
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);

    const viewContainerRef = this.accordionDirective.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<HasDataComponent>componentRef.instance).data = this.data;
  }

  toggleIsOpen(event: MouseEvent) {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }

  updateTitleState() {
    this._title = this.title;
    if (!this.isOpen) {
      this._title += '...';
    }
  }

  get accordionTitle(){ return this._title; }

  get accordionSubTitle(){ return this._subTitle; }

  set isOpen(value: boolean) {
    this._isOpen = value;
    this.updateTitleState();
  }

  get isOpen() { return this._isOpen; }

}
