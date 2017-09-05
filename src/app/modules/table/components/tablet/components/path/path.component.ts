import {
  Input,
  Component,
  OnChanges
} from '@angular/core';
import * as fabricModule from 'fabric';
import { DecodeService } from '../../../../../../shared/services';
import { AreaTablet } from '../../../../../../classes/area.tablet';
@Component({
  selector: 'tablet-path',
  template: ''
})
export class TabletPathComponent implements OnChanges{
  @Input('target') target:any;
  @Input('rootArea') rootArea:AreaTablet;
  @Input('codes') codes:any[];
  objects:any[] = [];
  color:string = 'red';
  lineWidth:number = 1;
  radius:number = 3;
  constructor(private decoder: DecodeService){

  }
  ngOnChanges(changes:any){
    if(changes.codes || changes.target){
      this.init();
    }
  }
  getCoordinates():any[]{
    let coordinates = [];
    let innerCodes = this.decoder.decode(this.codes);
    innerCodes.forEach((codes:string[])=>{
      let area = this.rootArea;
      codes.forEach((code:string)=>{
        area = area.innerAreas.find((area:any)=>{return area.code === code;});
      });
      coordinates.push(area.center);
    });
    return coordinates;
  }
  cleanObjects(){
    this.objects.forEach((object:any)=>{
      this.target.remove(object);
    });
    this.objects = [];
  }
  renderCircles(coordinates:any[]){
    coordinates.forEach((coordinate:any)=>{
      let circle = new fabricModule.fabric.Circle({
        fill: this.color,
        radius: this.radius,
        left: coordinate.left - this.radius,
        top: coordinate.top - this.radius
      });
      this.target.add(circle);
      this.objects.push(circle);
    });
  }
  renderLines(coordinates:any[]){
    if(coordinates.length > 1){
      for(let i = 0; i < coordinates.length;i++){
        if(coordinates[i+1]){
          let line = new fabricModule.fabric.Line([
            coordinates[i].left,coordinates[i].top,
            coordinates[i+1].left,coordinates[i+1].top
          ], {
            stroke: this.color,
            strokeWidth: this.lineWidth,
            selectable: false
          });
          this.objects.push(line);
          this.target.add(line);
        }
      }
    }
  }
  init(){
    if(this.target){
      this.cleanObjects();
      let coordinates = this.getCoordinates();
      this.renderCircles(coordinates);
      this.renderLines(coordinates);
    }
  }
}
