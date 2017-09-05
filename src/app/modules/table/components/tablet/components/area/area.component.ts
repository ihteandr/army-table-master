import {
  Input,
  Component,
  OnChanges
} from '@angular/core';
import * as fabricModule from 'fabric';
import { AreaTablet } from '../../../../../../classes/area.tablet';
@Component({
  selector: 'tablet-area',
  template: `
    <div *ngIf="area">
        <tablet-area *ngFor="let area of area.innerAreas"
                [target]="target"
                [area]="area"></tablet-area>
    </div>
  `
})
export class TabletAreaComponent implements OnChanges{
  @Input('target') target:any;
  @Input('area') area:AreaTablet;
  rect:any = null;
  text:any = null;
  columns:number = 3;
  innerAreasOptions: any[] = [];
  center:any = null;
  ngOnChanges(changes:any){
    if(changes.target){
      this.init();
    }
  }
  init(){
    if(this.target){
      this.rect = new fabricModule.fabric.Rect({
        width: this.area.size.width,
        height: this.area.size.height,
        left: this.area.position.left,
        strokeDashArray: this.area.dashed ? [7,7] : null,
        top: this.area.position.top,
        fill: 'transparent',
        strokeWidth: this.area.depth/2,
        selectable: false,
        stroke: 'rgba(185,190,199,0.6)'
      });
      if(this.area.showCode){
        let textColor = 'rgba(185,185,52,0.6)'
        let fontSize = 75;
        this.text = new fabricModule.fabric.Text(this.area.code, {
          width: this.area.size.width/this.area.columns,
          height: this.area.size.height/this.area.columns,
          left: this.area.center.left - fontSize/4,
          top: this.area.center.top - fontSize/1.8,
          fontSize: 75,
          opacity: .6,
          strokeWidth: this.area.depth,
          selectable: false,
          stroke: textColor,
          fill: textColor
        });
        this.target.add(this.text);
      }
      this.target.add(this.rect);
    }
  }
}
