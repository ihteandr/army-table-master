import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';
import * as fabric from 'fabric';
import { BaseComponent } from '../../classes/base.component';


@Component({
  selector: 'master-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  host: {
    class: 'master-table'
  }
})
export class TableComponent extends BaseComponent implements AfterViewInit{
  codesCollection:any[] = [[['1','1','1'], ['1','9','9'], ['2','6','9']]];
  constructor(private cd:ChangeDetectorRef,
              element:ElementRef){
    super();
  }
  applyCodes(event:any, code){
    let codes = [code.substr(0,1),code.substr(1,1), code.substr(2,1)];
    this.codesCollection[0].push(codes);
    this.codesCollection[0] = this.codesCollection[0].slice();
    this.codesCollection = this.codesCollection.slice();
  }
  ngAfterViewInit(){
  }
}
