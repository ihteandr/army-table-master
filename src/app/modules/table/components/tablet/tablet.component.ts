import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input,
  OnChanges,
  ChangeDetectorRef
} from '@angular/core';
import * as fabricModule from 'fabric';
import { BaseComponent } from '../../../../classes/base.component';
import { AreaTablet } from '../../../../classes/area.tablet';

@Component({
  selector: 'tablet',
  templateUrl: './tablet.component.html',
  styleUrls: ['./tablet.component.scss'],
  host: {
    class: 'tablet'
  }
})
export class TabletComponent extends BaseComponent implements AfterViewInit, OnChanges{
  @ViewChild('fabricContainer')
  private fabricContainer: ElementRef;
  canvas: any;
  area:AreaTablet;
  @Input('codesCollection')
  codesCollection: any[] = [];
  constructor(private cd: ChangeDetectorRef,
              private element:ElementRef){
    super();
  }
  ngAfterViewInit(){

  }
  ngOnChanges(changes){
  }
  ngAfterContentInit(){
    let parentNode = this.fabricContainer.nativeElement.parentNode;
    let parentRect = parentNode.getBoundingClientRect();

    this.fabricContainer.nativeElement.setAttribute('width', parentRect.width);
    this.fabricContainer.nativeElement.setAttribute('height', parentRect.height);
    this.canvas = new fabricModule.fabric.Canvas(this.fabricContainer.nativeElement, {
      selection: false
    });
    this.area = new AreaTablet({
      size:{
        width: parentRect.width - 6,
        height: parentRect.height - 6
      },
      root: true,
      dashed: false,
      depth: 4,
      code: 'root',
      position: {left:1, top:1},
      target: this.canvas
    })
  }
}
